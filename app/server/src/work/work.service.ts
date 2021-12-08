import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpCode } from 'src/common/enums/http';
import { GlobalServiceError } from 'src/common/utils';
import { WorkDto, Work } from 'src/document';
import { UserDocument } from 'src/users/schemas/user.schema';

@Injectable()
export class WorkService {

  constructor (@InjectModel(Work.name) private workModel: Model<WorkDto>) {}

  /**
   * 创建业务线
   * @param row 用户数据
   * @requires _id 业务线id
   */
  async create(row: Work) {
    try {
      const afterCreateWorkLine = await new this.workModel(row).save()
      return afterCreateWorkLine._id
    } catch (error) {
      console.error(error)
      throw new GlobalServiceError(HttpCode.SERVER_ERROR)
    }
  }

  /**
   * 
   */
  async findUserWorkList(id: UserDocument['_id']) {
    try {
      const works = this.workModel.find({
        user: id
      }).exec()
      return works
    } catch (error) {
      console.error(error)
      throw new GlobalServiceError(HttpCode.SERVER_ERROR)
    }
  }
}
