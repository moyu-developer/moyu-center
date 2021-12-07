import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkDto, WorkModel } from 'src/document'

@Module({
  imports: [MongooseModule.forFeature([{ name: WorkDto.name, schema: WorkModel }])],
  controllers: [WorkController],
  providers: [WorkService],
  exports: [WorkService]
})
export class WorkModule {}
