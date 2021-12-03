import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import type { INestApplication } from '@nestjs/common'
import { HttpExceptionFilter } from '../common/middleware/httpException.filter'
import { TransformResponseInterceptor } from '../common/middleware/transformResponse.interceptor'

const swaggerOptions = new DocumentBuilder()
  .setTitle('Moyu Center API')
  .setDescription('🦑moyu center 接口文档中心，用于站点接口调试以及OpenAPI展示。（仅限内部使用）')
  .setVersion('1.0')
  .build();

export default function registerAllMiddleware (app: INestApplication) {
  /** 注册http错误过滤器 */
  app.useGlobalFilters(new HttpExceptionFilter())

  /** 注册响应结果拦截器 */
  app.useGlobalInterceptors(new TransformResponseInterceptor())

  /** 注册路由前缀 */
  app.setGlobalPrefix('api')
  
  /** 创建swagger文档 */
  const docs = SwaggerModule.createDocument(app, swaggerOptions)
  SwaggerModule.setup('docs.html', app, docs)
}