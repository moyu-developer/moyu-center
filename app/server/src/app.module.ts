import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './logical/auth/auth.module';

import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { WorkModule } from './work/work.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env'],
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UserModule,
    UsersModule,
    AuthModule,
    WorkModule,
  ],
  controllers: [AppController, UserController, UsersController],
  providers: [AppService],
})
export class AppModule {}
