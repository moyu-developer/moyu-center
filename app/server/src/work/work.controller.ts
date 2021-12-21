import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Put,
  Delete,
  Query,
} from "@nestjs/common";
import { WorkService } from "./work.service";
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { AuthGuard } from "@nestjs/passport";
import { GetRequestUser, ReturnUserTypes } from "src/common/utils/decorator";
import { UpdateWorkDto } from "./dto/update.dto";
import { WorkRecordService } from "src/work-record/work-record.service";
import { CreateWorkDto } from "./dto/create.dto";
import { GlobalServiceError } from "../common/utils/catch";
import { QueryWorkDto } from "./dto/query.dto";
import { HttpStatus } from "@nestjs/common";
import { Work } from "src/model";
import type { WorkDto } from "src/model";
import type { WorkRecord } from "src/model";
import type { ObjectId } from "mongoose";
@Controller("work")
@ApiTags("业务线")
@ApiBearerAuth()
export class WorkController {
  constructor(
    private readonly workService: WorkService,
    private readonly workRecordService: WorkRecordService
  ) {}

  @Post("v1/create")
  @UseGuards(AuthGuard("jwt"))
  @ApiOperation({ summary: "创建一条业务线" })
  @ApiOkResponse({ description: "创建业务线成功" })
  async create(
    @Body() data: CreateWorkDto,
    @GetRequestUser() user: ReturnUserTypes
  ): Promise<string> {
    const workData: Work = {
      name: data.name,
      description: data?.description,
    };

    const workId = await this.workService.create(workData);
    let records: WorkRecord[] = [];
    if (Array.isArray(data.users)) {
      records = data.users.map((id: string) => ({
        work_id: workId,
        user_id: id,
        action: 2,
      }));
    }
    records.push({
      work_id: workId,
      user_id: user.userId,
      action: 1,
    });
    this.workRecordService.createRecord(records);
    return workId;
  }

  @Get("v1/list")
  @UseGuards(AuthGuard("jwt"))
  @ApiOperation({ summary: "当前用户所属业务线" })
  @ApiOkResponse({ status: 200, type: [Work] })
  async list(
    @Query() queryWork: QueryWorkDto,
    @GetRequestUser() user: ReturnUserTypes
  ): Promise<WorkDto[]> {
    const ids = await this.workRecordService.findCurrentUserWorkRecords({
      ...queryWork,
      user_id: user.userId,
    });
    return await this.workService.findUserWorkListById(ids);
  }

  @Delete("v1/delete/:id")
  @UseGuards(AuthGuard("jwt"))
  @ApiOperation({ summary: "通过id删除当前业务线" })
  async delete(
    @Param("id") id: string,
    @GetRequestUser() user: ReturnUserTypes
  ): Promise<boolean> {
    const ids = await this.workRecordService.findCurrentUserWorkRecords({
      action: 1,
      work_id: id,
      user_id: user.userId,
    });
    if (ids && ids.length > 0) {
      /** 删除业务线 */
      await this.workService.deleteWorkLineById(id);
      return await this.workRecordService.deleteAllRecordByWorkId(id);
    } else {
      throw new GlobalServiceError(
        HttpStatus.INTERNAL_SERVER_ERROR,
        `未找到您创建的业务线，情核对当前的${id}是否正确`
      );
    }
  }
  @Put("v1/change/:id")
  @UseGuards(AuthGuard("jwt"))
  @ApiOperation({ summary: "通过id修改当前业务线信息" })
  async update(
    @Param("id") workId: string,
    @Body() payload: UpdateWorkDto
  ): Promise<boolean> {
    return await this.workService.updateUserWorkListByUserId(workId, payload);
  }
}
