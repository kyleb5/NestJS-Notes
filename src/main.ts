import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable global validation pipe
  // This will automatically validate incoming requests against the DTOs
  // and return errors if the validation fails.
  // For example, if a required field is missing or a field does not match the expected type.
  // This is useful for ensuring that the data your application receives is valid.
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Automatically strip properties that do not have any decorators
    forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are present
    transform: true, // Automatically transform payloads to DTO instances
  }));

  // Swagger Configuration
  const config = new DocumentBuilder().
  setTitle('Hello World)').
  setDescription('Use the base api url as').
  setTermsOfService('http://google.com').
  setLicense('MIT License TEST', '0214030').
  addServer('http://localhost:3000').
  setVersion('1.0').
  build();
  // Instantiate Document
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)



  await app.listen(3000);
}
bootstrap();
