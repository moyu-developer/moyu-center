import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpCode } from 'src/common/enums/http';
import { GlobalServiceError } from 'src/common/utils';
import type { WorkDto} from 'src/document';
import { Work } from 'src/document';
import type { UpdateWorkDto } from './dto/update.dto';

@Injectable()
export class WorkService {
  constructor(
    @InjectModel(Work.name) private workModel: Model<WorkDto>
  ) {}

  /** 通过业务线id将其删除 */
  async deleteWorkLineById(id: WorkDto['_id']) {
    try {
      const res = await this.workModel.deleteOne({_id: id})
      return res.deletedCount > 0
    } catch (error) {
      throw new GlobalServiceError(HttpCode.SERVER_ERROR);
    }
  }

  /**
   * 创建业务线
   * @param row 用户数据
   * @requires _id 业务线id
   */
  async create(row: Work) {
    try {
      const afterCreateWorkLine = await new this.workModel(row).save();
      return afterCreateWorkLine._id;
    } catch (error) {
      console.error(error);
      throw new GlobalServiceError(HttpCode.SERVER_ERROR);
    }
  }

  /** 查询当前用户下所有业务线归属 */
  async findUserWorkListById(ids: WorkDto['_id'][]) {
    try {
      const works = await this.workModel
        .find({
          _id: {
            $in: ids
          },
        })
        .exec();
        console.log(works, 'works')
      return works;
    } catch (error) {
      console.error(error);
      throw new GlobalServiceError(HttpCode.SERVER_ERROR);
    }
  }

  /** 修改当前业务线 */
  async updateUserWorkListByUserId(id: WorkDto['_id'], work: UpdateWorkDto) {
    try {
      const currentWork = await this.workModel.findById(id).exec();
      if (currentWork) {
        const result = await this.workModel.updateOne(work);
        console.log(result);
        return true;
      } else {
        throw new GlobalServiceError(
          HttpCode.SERVER_ERROR,
          `当前业务线id数据未找到：${id}`,
        );
      }
    } catch (error) {
      console.error(error);
      throw new GlobalServiceError(HttpCode.SERVER_ERROR);
    }
  }
}
