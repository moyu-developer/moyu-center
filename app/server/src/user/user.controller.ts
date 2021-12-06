import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { UserPayload, User } from 'src/dto/user';
import { UserService } from './user.service'

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor (private readonly service: UserService) {
  }

  @Get('list')
  async getUserList () {
    return await this.service.findAllData()
  }

  @Post('list')
  async createUserData (@Body() body: UserPayload) {
    return await this.service.create(body)
  }
}
