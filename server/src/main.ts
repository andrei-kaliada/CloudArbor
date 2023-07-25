import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as express from 'express'
import { join } from 'path'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false })

  const config = new DocumentBuilder()
    .setTitle('Cloud Arbor')
    .addBearerAuth()
    .setVersion('1.0')
    .build()

  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')))

  app.setGlobalPrefix('api')
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document, { 
    swaggerOptions: {
      persistAuthorization: true,
  }
})
  await app.listen(4200)
}
bootstrap()
