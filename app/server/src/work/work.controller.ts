import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
  UsePipes,
  Put,
} from '@nestjs/common';
import { WorkService } from './work.service';
import { Work, WorkDto } from 'src/document';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { GetRequestUser, ReturnUserTypes } from 'src/common/utils/decorator';
import { UpdateWorkDto } from './dto/update.dto';

@Controller('work')
@ApiTags('业务线')
@ApiBearerAuth()
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Post('v1/create')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '创建一条业务线' })
  async create(
    @Body() createWorkDto: Work,
    @GetRequestUser() user: ReturnUserTypes,
  ) {
    createWorkDto.user = user.userId;
    return await this.workService.create(createWorkDto);
  }

  @Get('v1/list')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '当前用户所属业务线' })
  async list(@GetRequestUser() user: ReturnUserTypes) {
    return await this.workService.findUserWorkListByUserId(user.userId);
  }

  @Get('v1/delete/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '通过id删除当前业务线' })
  async delete(@Param('id') id: string) {
    return await this.workService.findUserWorkListByUserId(id);
  }
  @Put('v1/change/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '通过id修改当前业务线信息' })
  async update(@Param('id') workId: string, @Body() payload: UpdateWorkDto) {
    return await this.workService.updateUserWorkListByUserId(workId, payload);
  }
}
