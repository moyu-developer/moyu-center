import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import type { UserDto } from 'src/model';
import { Type } from 'class-transformer';

export class CreateWorkDto {
  
  @IsNotEmpty({ message: '业务线名称不能为空' })
  @ApiProperty({ description: '业务线名称', required: true })
  name: string;

  @ApiProperty({ description: '拉入业务线的成员列表', required: false })
  users?: UserDto['_id'][]

  @Type(() => String)
  @ApiProperty({ description: '业务线简介', required: false })
  description?: string;

  constructor(partial: Partial<CreateWorkDto>) {
    Object.assign(this, partial);
  }
  
}
