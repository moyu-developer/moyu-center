import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/document';
import { UserService } from './user.service'

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor (private readonly userService: UserService) {}

  /**
   * 创建一条用户信息
   * @param user UserDto 当前需要创建的用户
   * @returns 
   */
  @Post('create')
  async createUser (@Body() user: UserDto): Promise<UserDto['_id']> {
    return this.userService.create(user)
  }

  
  /**
   * 获取用户列表
   */
  @Get('list')
  async getUserList () {
    return this.userService.queryAllUser()
  }

}
