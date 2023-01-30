import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import fetch from "node-fetch";
import * as FormData from "form-data";
import { URLSearchParams } from "url";

import { updateWretchInstance } from "@resume/utils";

import { AppModule } from "./app.module";
import { clientPort, serverPort } from "./utils/env";
import { AppInterceptor } from "./app/app.interceptor";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_FIREBASE_CONFIG_JSON: string;
      VITE_LINKEDIN_CLIENT_ID: string;
      VITE_LINKEDIN_CLIENT_SECRET: string;
      VITE_CLIENT_PORT: string;
      VITE_SERVER_PORT: string;
    }
  }
}

(async () => {
  updateWretchInstance(wretch => wretch.polyfills({ fetch, FormData, URLSearchParams }));

  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: `http://localhost:${clientPort}`, credentials: true });
  app
    .setGlobalPrefix(`/api/v1`)
    .useGlobalInterceptors(new AppInterceptor())
    .useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(serverPort);
})();
