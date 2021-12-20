import { ApiProperty } from '@nestjs/swagger';

export class QueryWorkDto {
  @ApiProperty({ description: '状态', enum: [1, 2], required: false })
  action?: 1 | 2;
}
