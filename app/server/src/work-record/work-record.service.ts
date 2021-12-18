import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import type { WorkRecordDto } from 'src/document/work-record';
import { WorkRecord } from '../document/work-record';
import { GlobalServiceError } from 'src/common/utils/catch';
import { HttpCode } from 'src/common/enums/http';

@Injectable()
export class WorkRecordService {

  constructor(
    @InjectModel(WorkRecord.name) public workRecordModel: Model<WorkRecordDto>
  ) {}

  /**
   * 创建workRecord记录
   * @param record workRecord
   */
  async createRecord (records: WorkRecord[]): Promise<WorkRecordDto[]> {
    try {
      const result = await this.workRecordModel.insertMany(records)
      return result
    } catch (error) {
      throw new GlobalServiceError(HttpCode.SERVER_ERROR)
    }
  }

  /**
   * 查询workRecord记录
   * @param record workRecord
   */
  async findCurrentUserWorkRecords (record: Partial<WorkRecord>) {
    try {
      const records = await this.workRecordModel.find(record, { work: true }).exec()
      return records.map((item: WorkRecordDto) => item.work)
    } catch (error) {
      throw new GlobalServiceError(HttpCode.SERVER_ERROR)
    }
  }

  /**
   * 
   * @param workIds 业务线ids
   * @returns { boolean }
   */
  async deleteAllRecordByWorkId (id: WorkRecord['work']): Promise<boolean> {
    try {
      const records = await this.workRecordModel.deleteMany({
        work: id
      }).exec()
      return records.deletedCount > 0
    } catch (error) {
      throw new GlobalServiceError(HttpCode.SERVER_ERROR)
    }
  }
}
