import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import { ValidationPipe } from 'src/common/pipe/validation';
import { LoginUserDto } from './dto/login-user-dto';
import { AuthService } from 'src/logical/auth/auth.service';
import { UpdateUserDto } from './dto/update-user-dto';

@ApiBearerAuth()
@Controller('users')
@ApiTags('用户模块')
export class UsersController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('register')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: '创建用户' })
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: '登录' })
  async login(@Body() loginUserDto: LoginUserDto) {
    console.log('JWT验证 - Step 1: 用户请求登录');
    const authResult = await this.authService.validateUser(
      loginUserDto.username,
      loginUserDto.password,
    );
    switch (authResult.code) {
      case 1:
        return this.authService.certificate(authResult.user);
      case 2:
        throw new BadRequestException(`账号或密码不正确`);
      default:
        throw new BadRequestException(`未查询到该用户`);
    }
  }

  @Post('update/:id')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: '修改用户信息' })
  async update(@Body() updateUserDto: UpdateUserDto, @Param('id') id: string) {
    return this.usersService.update(updateUserDto, id);
  }

  @Get('list')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: '查询用户列表' })
  async findAll(@Query() params, @Req() req: any): Promise<User[]> {
    console.log(req.user);
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt')) // 使用 'JWT' 进行验证  前端在请求头加上  Authorization: Bearer token
  @ApiOperation({ summary: '根据ID查询用户' })
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }
}
