import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  Length,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(3, 9)
  @ApiProperty({ example: 'admin', description: '用户名' })
  readonly username: string;

  @IsOptional()
  @IsString()
  @Length(6, 16)
  @ApiProperty({ example: '123456', description: '密码' })
  readonly password: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty({ example: 'admin@qq.com', description: '邮箱' })
  readonly email: string;

  @IsOptional()
  @IsPhoneNumber('CH')
  @ApiProperty({
    example: '+861380000000',
    description: '联系电话，请设定国家，目前仅支持中国 +86',
  })
  readonly mobile: string;
}
