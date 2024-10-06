import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("InstaShare")
    .setDescription("This Api for InstaShare")
    .setVersion("1.0.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory(erros: ValidationError[]) {
      const result = erros.map((error) => ({
        property: error.property,
        message: error.constraints[Object.keys(error.constraints)[0]]
      }))
      return new BadRequestException(result)

    }, stopAtFirstError: true
  })); await app.listen(3000);
}
bootstrap();
