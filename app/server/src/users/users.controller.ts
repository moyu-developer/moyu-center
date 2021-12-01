import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'

@Controller('users')
@ApiTags('用户模块')
export class UsersController {}
