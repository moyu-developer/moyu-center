import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import type { INestApplication } from '@nestjs/common'

const swaggerOptions = new DocumentBuilder()
  .setTitle('Moyu Center API')
  .setDescription('🦑moyu center 接口文档中心，用于站点接口调试以及OpenAPI展示。（仅限内部使用）')
  .setVersion('1.0')
  .build();

/**
 * 创建Swagger Docs
 * @param app NestApp实例
 */
export default function createSwaggerDocs (app: INestApplication) {
  const docs = SwaggerModule.createDocument(app, swaggerOptions)
  SwaggerModule.setup('docs.html', app, docs)
}