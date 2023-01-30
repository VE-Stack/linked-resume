import { existsSync } from "node:fs";
import glob from "glob";
import chalk from "chalk";

const files = glob.sync("src/**/*.tsx", {
  dot: true,
  absolute: true,
  nodir: true,
  ignore: ["**/src/*.tsx", "**/*.{spec,test}.tsx"]
});

const cwd = process.cwd().replace(/\\/g, "/");
const specFiles = files
  .map(file => file.replace(/\.tsx$/, ".spec.tsx"))
  .filter(file => !existsSync(file));

if (specFiles.length > 0) {
  const message = `Missing ${chalk.bold("spec file")} for the ${chalk.bold("following")} files`;
  const specFilesString = specFiles
    .map(file => file.replace(cwd, "").replace(/\.spec\.tsx$/, ".tsx"))
    .map(file => `  - ${file.slice(1)}`)
    .map(file => chalk.red(file))
    .join("\n");

  throw new Error(`${message}:\n${specFilesString}`);
}

export {};
