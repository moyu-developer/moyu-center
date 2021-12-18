import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import type { UserDocument } from '../../users/schemas/user.schema';

export class CreateWorkDto {
  @IsOptional()
  @ApiProperty({ description: '业务线名称', required: false })
  name: string;

  @ApiProperty({ description: '拉入业务线的成员列表', })
  users?: UserDocument['_id'][]

  @IsOptional()
  @ApiProperty({ description: '业务线简介' })
  description: string;
}
