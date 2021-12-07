import { IsString,  IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(3,9)
  @ApiProperty({ example: 'admin', description: '用户名' })
  readonly username: string;

  @IsString()
  @IsNotEmpty({ message: '密码不能为空' })
  @Length(6,16)
  @ApiProperty({ example: '123456', description: '密码' })
  readonly password: string;
}
