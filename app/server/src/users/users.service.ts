import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user-dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userModel.findOne({
      username: createUserDto.username,
    });
    if (!user) {
      const createdCat = new this.userModel(createUserDto);
      return createdCat.save();
    }
    throw new BadRequestException(`用户名：${createUserDto.username} 已存在!`);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
