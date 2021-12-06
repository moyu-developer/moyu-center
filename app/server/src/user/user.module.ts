import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller'
import { UserDto, UserModel } from '../document'

@Module({
  imports: [MongooseModule.forFeature([{ name: UserDto.name, schema: UserModel }])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
