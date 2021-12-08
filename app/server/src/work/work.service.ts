import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WorkDto } from 'src/document';

@Injectable()
export class WorkService {

  constructor (@InjectModel(WorkDto.name) private workModel: Model<WorkDto>) {}

  /**
   * 创建业务线
   * @param row 用户数据
   * @requires _id 业务线id
   */
  async create(row: WorkDto) {
    try {
      const afterCreateWorkLine = await new this.workModel(row).save()
      return afterCreateWorkLine._id
    } catch (error) {
      console.log('error')
      throw new HttpException(null, 500)
    }
  }

  /**
   * 查询所有用户
   */
  async queryAllUser() {
    const users = await this.workModel.find().exec()
    console.log(users)
    return users
  }
}
