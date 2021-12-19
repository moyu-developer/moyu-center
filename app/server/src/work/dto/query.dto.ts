import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class QueryWorkDto {
  @ApiProperty({ description: '状态', enum: [1, 2], required: false })
  @Type(() => Number)
  @IsNumber()
  status?: 1 | 2;
}
