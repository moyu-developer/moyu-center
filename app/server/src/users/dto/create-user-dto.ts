import { IsString, IsEmail, IsPhoneNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: '用户名不能为空' })
  @ApiProperty({ example: 'admin', description: '用户名' })
  readonly username: string;

  @IsString()
  @IsNotEmpty({ message: '密码不能为空' })
  @ApiProperty({ example: '123456', description: '密码' })
  readonly password: string;

  @IsEmail()
  @IsNotEmpty({ message: '邮箱不能为空' })
  @ApiProperty({ example: 'admin@qq.com', description: '邮箱' })
  readonly emali: string;

  @IsPhoneNumber('CH')
  @IsNotEmpty({ message: '联系电话不能为空' })
  @ApiProperty({ example: '+8618296743305', description: '联系电话，请设定国家，目前仅支持中国 +86' })
  readonly mobile: string;
}
