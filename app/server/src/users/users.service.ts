import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from 'src/document';
import { User, UserDocument } from './schemas/user.schema';
import { makeSalt, encryptPassword } from 'src/common/utils/cryptogram';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { username, password, email, mobile } = createUserDto;
    const user = await this.userModel.findOne({ username });
    if (!user) {
      const salt = makeSalt(); // 制作密码盐
      const hashPwd = encryptPassword(password, salt); // 加密密码
      const createdUser = new this.userModel({
        username,
        password: hashPwd,
        email,
        salt,
        mobile,
      });
      return (await createdUser.save())._id;
    }
    throw new BadRequestException(`用户名：${createUserDto.username} 已存在!`);
  }

  async update(updateUserDto: UpdateUserDto, id: string): Promise<User> {
    const updateUserInfo = { ...updateUserDto, salt: makeSalt() };
      if (updateUserDto.password) {
        updateUserInfo.password = encryptPassword(
          updateUserDto.password,
          updateUserInfo.salt,
        ); // 加密密码
      }
      const user = await this.userModel.findOneAndUpdate(
        { _id: id },
        updateUserInfo,
      );
      console.log(user)
      if (user) return user._id;
      throw new BadRequestException(`用户不存在`);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find({}, { password: 0, salt: 0 }).exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id, { password: 0, salt: 0 });
  }

  async findByUserName(username: string): Promise<User> {
    return this.userModel.findOne({ username });
  }
}
