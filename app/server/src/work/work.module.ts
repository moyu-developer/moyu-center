import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Work, WorkModel } from 'src/model';
import { WorkRecordController } from '../work-record/work-record.controller';
import { WorkRecordModule } from '../work-record/work-record.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Work.name, schema: WorkModel }]),
    WorkRecordModule
  ],
  controllers: [WorkController, WorkRecordController],
  providers: [WorkService],
  exports: [WorkRecordModule]
})
export class WorkModule {}
