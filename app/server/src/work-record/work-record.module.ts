import { Module } from '@nestjs/common';
import { WorkRecordService } from './work-record.service';
import { WorkRecord, WorkRecordModel } from '../document/work-record';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkRecordController } from './work-record.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: WorkRecord.name, schema: WorkRecordModel }])],
  controllers: [WorkRecordController],
  providers: [WorkRecordService],
  exports: [WorkRecordService]
})
export class WorkRecordModule {}
