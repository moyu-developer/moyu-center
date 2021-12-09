import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserDocument } from 'src/users/schemas/user.schema';

export interface ReturnUserTypes {
  username: UserDocument['username'];
  userId: UserDocument['_id'];
  mobile: UserDocument['mobile'];
  email: UserDocument['email'];
}

/**
 * 获取Token 用户信息装饰器
 * @example
 * @GetRequestUser() user: ReturnUserTypes
 */
export const GetRequestUser = createParamDecorator((data: keyof ReturnUserTypes , ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest()
  if (data) {
    return req.user['data']
  }
  return req.user
})