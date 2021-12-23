import { ApiProperty } from "@nestjs/swagger";

export class PaginatedDto<T = any> {
  @ApiProperty({ description: '当前分页数据总数' })
  total: number;

  @ApiProperty({ description: '每一页多少条' })
  pageSize: number;

  @ApiProperty({ description: '当前所处分页' })
  current: number;

  list: T[];
}