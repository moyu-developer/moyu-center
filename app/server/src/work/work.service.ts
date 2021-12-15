import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpCode } from 'src/common/enums/http';
import { GlobalServiceError } from 'src/common/utils';
import { WorkDto, Work } from 'src/document';
import { UserDocument } from 'src/users/schemas/user.schema';
import { UpdateWorkDto } from './dto/update.dto';

@Injectable()
export class WorkService {
  constructor(@InjectModel(Work.name) private workModel: Model<WorkDto>) {}

  /** 通过业务线id将其删除 */
  async deleteWorkLineById(id: WorkDto['_id'], userId: string) {
    try {
      const currentWork = await this.workModel.findById(id);

      if (!currentWork._id) {
        throw new GlobalServiceError(
          HttpCode.SERVER_ERROR,
          `当前删除的数据不存在, 请检查传入id: ${id}`,
        );
      }

      if (currentWork.user !== userId) {
        throw new GlobalServiceError(
          HttpCode.SERVER_ERROR,
          `你没有权限删除此业务线，请联系管理员`,
        );
      }

      const isDelete = await this.workModel
        .updateOne(
          {
            _id: id,
          },
          {
            isDelete: true,
          },
        )
        .exec();
      return isDelete.upsertedId ? true : false;
    } catch (error) {
      console.error(error);
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
  async findUserWorkListByUserId(id: UserDocument['_id']) {
    try {
      const works = this.workModel
        .find({
          user: id,
        })
        .exec();
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
