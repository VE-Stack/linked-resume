import { inspect } from "node:util";
import { resolve, sep, dirname } from "node:path";
import { existsSync, promises } from "node:fs";

import { BaseCommand } from "@yarnpkg/cli";
import { Plugin, Hooks } from "@yarnpkg/core";
import { Command, Option } from "clipanion";
import { parse } from "dotenv";
import * as t from "typanion";

const mapEnvFile = async (projectCwd: string, NODE_ENV = "production") => {
  const envObject: Record<string, string> = {};

  envObject.NODE_ENV = NODE_ENV || "development";

  const envFile = resolve(projectCwd, ".env");
  const isEnvFileExists = existsSync(envFile);

  const prodEnvFile = resolve(projectCwd, ".env.prod");
  const productionEnvFile = resolve(projectCwd, ".env.production");
  const isProdEnvFileExists = existsSync(prodEnvFile);
  const isProductionEnvFileExists = existsSync(productionEnvFile);

  const devEnvFile = resolve(projectCwd, ".env.dev");
  const developmentEnvFile = resolve(projectCwd, ".env.development");
  const isDevEnvFileExists = existsSync(devEnvFile);
  const isDevelopmentEnvFileExists = existsSync(developmentEnvFile);

  const testEnvFile = resolve(projectCwd, ".env.test");
  const testingEnvFile = resolve(projectCwd, ".env.testing");
  const isTestEnvFileExists = existsSync(testEnvFile);
  const isTestingEnvFileExists = existsSync(testingEnvFile);

  if (isEnvFileExists) {
    Object.assign(envObject, parse(await promises.readFile(envFile, "utf8")));
  }

  if (envObject.NODE_ENV === "production") {
    if (isProdEnvFileExists) {
      Object.assign(envObject, parse(await promises.readFile(prodEnvFile, "utf8")));
    }
    if (isProductionEnvFileExists) {
      Object.assign(envObject, parse(await promises.readFile(productionEnvFile, "utf8")));
    }
  }

  if (envObject.NODE_ENV === "development") {
    if (isDevEnvFileExists) {
      Object.assign(envObject, parse(await promises.readFile(devEnvFile, "utf8")));
    }
    if (isDevelopmentEnvFileExists) {
      Object.assign(envObject, parse(await promises.readFile(developmentEnvFile, "utf8")));
    }
  }

  if (envObject.NODE_ENV === "test") {
    if (isTestEnvFileExists) {
      Object.assign(envObject, parse(await promises.readFile(testEnvFile, "utf8")));
    }
    if (isTestingEnvFileExists) {
      Object.assign(envObject, parse(await promises.readFile(testingEnvFile, "utf8")));
    }
  }

  return envObject;
};

const usage = Command.Usage({
  description: "print environment variables",
  details: `
This command will print environment variables.

Environment variables are loaded from the following files:

 - .env

For NODE_ENV=production:  

 - .env.prod
 - .env.production

For NODE_ENV=development:  

 - .env.dev
 - .env.development

For NODE_ENV=test:  

 - .env.test
 - .env.testing
`.trimStart(),
  examples: [
    ["Print environment variables", "$0 env"],
    ["Print environment variables for NODE_ENV=development", "$0 env --env dev,development"],
    ["Print environment variables for NODE_ENV=production", "$0 env --env prod,production"],
    ["Print environment variables for NODE_ENV=test", "$0 env --env test,testing"],
    ["Print environment as json", "$0 env --json"],
    ["Print environment as json-object", "$0 env --json --object"],
    ["Print environment as bash string (default)", "$0 env --text"]
  ],
  category: "Environment"
});

class EnvCommand extends BaseCommand {
  static paths = [["env"]];

  static usage = usage;

  text = Option.Boolean("--text", true, { description: "Print environment as json" });
  json = Option.Boolean("--json", false, { description: "Print environment as json" });
  object = Option.Boolean("--object,-o", false, {
    description: "Print environment as javascript object. Uses with --json together"
  });
  envVar = Option.String("--envVar", "production", {
    description: "Print and set environment variables for NODE_ENV",
    validator: t.isEnum(["production", "development", "testing", "prod", "dev", "test"])
  });

  async execute() {
    const development = ["development", "dev"];
    const production = ["production", "prod"];
    const testing = ["testing", "test"];

    const env = development.includes(this.envVar)
      ? "development"
      : production.includes(this.envVar)
      ? "production"
      : testing.includes(this.envVar)
      ? "test"
      : "production";

    const envObject = {};

    const rootPath = [process.cwd().split(sep)[0], ""].join(sep);
    let path = process.cwd();
    while (path.split(sep).length > 1 && process.platform === "win32" && path !== rootPath) {
      const foundEnvObject = await mapEnvFile(path, env);
      Object.assign(envObject, foundEnvObject);
      path = dirname(path);
    }

    const envString = Object.entries(envObject)
      .map(([key, value]) => `${key}=${value}`)
      .join("\n");

    const chunk = this.json
      ? this.object
        ? inspect(envObject, { colors: true }) + "\n"
        : JSON.stringify(envObject, null, 2)
      : envString;

    this.context.stdout.write(`${chunk}\n`);
  }
}

const plugin: Plugin<Hooks> = {
  hooks: {
    async setupScriptEnvironment(_project, env) {
      const envObject = await mapEnvFile(env.PROJECT_CWD, env.NODE_ENV);
      Object.assign(env, envObject);
    }
  },

  commands: [EnvCommand]
};

export default plugin;
