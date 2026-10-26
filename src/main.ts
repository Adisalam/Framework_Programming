import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common'; // <-- Make sure to import this
import { AppModule } from './app.module.js';
import { TransformResponseInterceptor } from './interceptor/trasform-response/trasform-response.interceptor.js'; // <-- Import the interceptor

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
app.useGlobalInterceptors(new TransformResponseInterceptor());
// <-- Add this line to use the interceptor globally
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();