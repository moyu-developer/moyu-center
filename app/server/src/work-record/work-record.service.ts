import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import type { WorkRecordDto } from 'src/model';
import { WorkRecord } from 'src/model'
import { GlobalServiceError } from 'src/common/utils/catch';

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
      throw new GlobalServiceError(HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  /**
   * 查询workRecord记录
   * @param record workRecord
   */
  async findCurrentUserWorkRecords (record: Partial<WorkRecord>) {
    try {
      const records = await this.workRecordModel.find(record, { work_id: true }).exec()
      console.log(records, 'records')
      return records.map((item: WorkRecordDto) => item.work_id )
    } catch (error) {
      throw new GlobalServiceError(HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  /**
   * 
   * @param workIds 业务线ids
   * @returns { boolean }
   */
  async deleteAllRecordByWorkId (id: string): Promise<boolean> {
    try {
      const records = await this.workRecordModel.deleteMany({
        work_id: id
      }).exec()
      console.log(records,'records')
      return records.deletedCount > 0
    } catch (error) {
      throw new GlobalServiceError(HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
