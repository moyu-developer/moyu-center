import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Work, WorkModel } from 'src/document'

@Module({
  imports: [MongooseModule.forFeature([{ name: Work.name, schema: WorkModel }])],
  controllers: [WorkController],
  providers: [WorkService],
  exports: [WorkService]
})
export class WorkModule {}
