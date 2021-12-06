import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserORM } from '../dto/user'

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [MongooseModule.forFeature([UserORM])],
  exports: [UserService]
})
export class UserModule {
  
}
