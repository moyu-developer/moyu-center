import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserDto } from 'src/document';
import { UserService } from './user.service'
import { ValidationPipe } from 'src/common/pipe/validation'

@Controller('user/v1/')
@ApiTags('用户')
export class UserController {
  constructor (private readonly userService: UserService) {}

  /**
   * 创建一条用户信息
   * @param user UserDto 当前需要创建的用户
   * @returns 
   */
  @Post('create')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: '添加用户' })
  async createUser (@Body() user: UserDto): Promise<UserDto['_id']> {
    return this.userService.create(user)
  }

  
  /**
   * 获取用户列表
   */
  @Get('list')
  @ApiOperation({ summary: '查询用户列表' })
  async getUserList () {
    return this.userService.queryAllUser()
  }

}
