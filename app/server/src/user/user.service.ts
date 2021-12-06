import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserORM, UserDocument } from '../dto/user'

@Injectable()
export class UserService {
  constructor (@InjectModel(UserORM.name) private model: Model<UserDocument>) {}

  async findAllData () {
    const res = await this.model.find().exec()
    console.log(res)
    return res
  }

  async create(row) {
    return await new this.model({
      ...row,
      createdAt: new Date(),
    }).save();
  }
}
