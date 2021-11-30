import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import registerAllMiddleware from './registers/center'

async function bootstrap() {
  /** 创建Nest App */
  const app = await NestFactory.create(AppModule);

  /** 注册中间件 & 迭代器 */
  registerAllMiddleware(app)

  /** 服务👌 */
  await app.listen(8301);
}
bootstrap();
