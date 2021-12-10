import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateWorkDto {
  @IsOptional()
  @ApiProperty({ description: '业务线名称', required: false })
  name: string;

  @IsOptional()
  @ApiProperty({ description: '业务线简介' })
  description: string;
}