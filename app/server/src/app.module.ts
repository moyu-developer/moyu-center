import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './logical/auth/auth.module';

import { UsersController } from './user/user.controller';
import { UsersModule } from './user/user.module';
import { WorkModule } from './work/work.module';
import { UploadModule } from './upload/upload.module';
import { ProjectController } from './project/project.controller';
import { ProjectService } from './project/project.service';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env'],
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UsersModule,
    AuthModule,
    WorkModule,
    UploadModule,
    ProjectModule,
  ],
  controllers: [AppController, UsersController, ProjectController],
  providers: [AppService, ProjectService],
})
export class AppModule {}
