import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/middleware/httpException.filter';
import { TransformResponseInterceptor } from 'src/common/middleware/transformResponse.interceptor';
import { ValidationPipe } from 'src/common/pipe/validation';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Moyu Center API')
  .setDescription(
    '🦑moyu center 接口文档中心，用于站点接口调试以及OpenAPI展示。（仅限内部使用）',
  )
  .setVersion('1.0')
  .addBearerAuth()
  .setBasePath('http://localhost:8301/api')
  .build();

export default function registerAllMiddleware(app: INestApplication) {
  /** 关闭cores， 解决跨域 */
  app.enableCors();

  /** 全局使用管道 */
  app.useGlobalPipes(new ValidationPipe());

  /** 注册http错误过滤器 */
  app.useGlobalFilters(new HttpExceptionFilter());

  /** 注册响应结果拦截器 */
  app.useGlobalInterceptors(new TransformResponseInterceptor());

  /** 注册路由前缀 */
  app.setGlobalPrefix('api');

  /** 创建swagger文档 */
  const docs = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs.html', app, docs);
}
