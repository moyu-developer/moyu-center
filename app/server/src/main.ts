import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import registerAllMiddleware from './registers/center';

async function bootstrap() {
  /** 创建Nest App */
  const app = await NestFactory.create(AppModule, { cors: true });

  /** 注册中间件 & 迭代器 */
  registerAllMiddleware(app);

  /** 服务👌 */
  await app.listen(8301, () => {
    console.log('open serve： http://localhost:8301');
  });
}
bootstrap();
