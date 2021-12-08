import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Query, UsePipes } from '@nestjs/common';
import { WorkService } from './work.service';
import { Work, WorkDto } from 'src/document'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { GetRequestUser, ReturnUserTypes } from 'src/common/utils/decorator';

@Controller('work')
@ApiTags('业务线')
@ApiBearerAuth()
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Post('v1/create')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '创建一条业务线' })
  create(@Body() createWorkDto: Work, @GetRequestUser() user: ReturnUserTypes) {
    createWorkDto.user = user.userId
    return this.workService.create(createWorkDto);
  }

  @Get('v1/list')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '当前用户所属业务线' })
  list(@GetRequestUser() user: ReturnUserTypes) {
    return this.workService.findUserWorkList(user.userId)
  }
}
