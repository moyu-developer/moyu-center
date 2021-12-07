import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkDto } from 'src/document'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('work')
@ApiTags('业务线')
@ApiBearerAuth()
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Post('v1/create')
  @ApiOperation({ summary: '创建一条业务线' })
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createWorkDto: WorkDto, @Req() req: any) {
    console.log(req)
    return this.workService.create(createWorkDto);
  }
}
