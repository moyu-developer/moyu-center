import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/document';

@Injectable()
export class UserService {
  constructor (@InjectModel(UserDto.name) private userModel: Model<UserDto>) {}

  /**
   * 创建用户，并返回用户id
   * @param row 用户数据
   */
  async create(row: UserDto) {
    const beforeCreateUser = new this.userModel(row)
    return await (await beforeCreateUser.save())._id
  }

  /**
   * 查询所有用户
   */
  async queryAllUser() {
    const users = await this.userModel.find().exec()
    console.log(users)
    return users
  }
}
