import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class UpdateWorkDto {
  @IsOptional()
  @IsString()
  @Type(() => String)
  @ApiProperty({ description: '业务线名称', required: false })
  name?: string;

  @IsOptional()
  @Type(() => String)
  @ApiProperty({ description: '业务线简介', required: false })
  description?: string;
}
