import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const { VITE_SERVER_PORT = 3500, VITE_CLIENT_PORT = 3000 } = process.env;

  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: `http://localhost:${VITE_CLIENT_PORT}`, credentials: true });

  await app.listen(VITE_SERVER_PORT);
}
bootstrap();
