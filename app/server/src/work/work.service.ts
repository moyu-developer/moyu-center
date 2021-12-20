import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GlobalServiceError } from 'src/common/utils';
import type { WorkDto } from 'src/model';
import { Work } from 'src/model';
import type { UpdateWorkDto } from './dto/update.dto';
@Injectable()
export class WorkService {
  constructor(
    @InjectModel(Work.name) private workModel: Model<WorkDto>
  ) {}

  /** 通过业务线id将其删除 */
  async deleteWorkLineById(id: string) {
    try {
      const res = await this.workModel.deleteOne({_id: id})
      return res.deletedCount > 0
    } catch (error) {
      throw new GlobalServiceError(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

 async create(row: Work) {
    try {
      const afterCreateWorkLine = await new this.workModel(row).save();
      return afterCreateWorkLine._id;
    } catch (error) {
      throw new GlobalServiceError(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /** 查询当前用户下所有业务线归属 */
  async findUserWorkListById(ids: string[]): Promise<WorkDto[]> {
    try {
      const works: WorkDto[] = await this.workModel
        .find({
          _id: {
            $in: ids
          },
        })
        .exec();
      console.log(works)
      return works;
    } catch (error) {
      console.error(error);
      throw new GlobalServiceError(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /** 修改当前业务线 */
  async updateUserWorkListByUserId(id: WorkDto['_id'], work: UpdateWorkDto) {
    try {
      const currentWork = await this.workModel.findById(id).exec();
      if (currentWork) {
        const result = await this.workModel.updateOne(work);
        return result.upsertedCount > 0;
      }
    } catch (error) {
      throw new GlobalServiceError(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
