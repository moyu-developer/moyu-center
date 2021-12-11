/** eslint-disabled */
/** @ts-nocheck */

export interface PostApiUsersUpdateIdRequestTypes {
  /**
   * 用户名
   */
  username: string;
  /**
   * 密码
   */
  password: string;
  /**
   * 邮箱
   */
  email: string;
  /**
   * 联系电话，请设定国家，目前仅支持中国 +86
   */
  mobile: string;
  id?: string;
}




export default function postApiUsersUpdateId <
  P = PostApiUsersUpdateIdRequestTypes,
  R = any
>(
  allParams: P,
  options?: Record<string, any>
): Promise<R>