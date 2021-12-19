import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import type { UserDto } from 'src/model';
export interface ReturnUserTypes {
  username: UserDto['username'];
  userId: UserDto['_id'];
  mobile: UserDto['mobile'];
  email: UserDto['email'];
}

/**
 * 获取Token 用户信息装饰器
 * @example
 * @GetRequestUser() user: ReturnUserTypes
 */
export const GetRequestUser = createParamDecorator(
  (data: keyof ReturnUserTypes, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    if (data) {
      return req.user.data;
    }
    return req.user;
  },
);
