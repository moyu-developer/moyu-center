import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import createSwaggerDocs from './tools/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  /** 创建swagger文档 */
  createSwaggerDocs(app)
  await app.listen(3000);
}
bootstrap();
