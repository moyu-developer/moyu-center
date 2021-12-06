import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import {  ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import { ValidationPipe } from 'src/common/pipe/validation'

@Controller('users')
@ApiTags('用户模块')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: '创建用户' })
  async create(@Body() createUserDto: CreateUserDto) {
    await this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: '查询用户列表' })
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
