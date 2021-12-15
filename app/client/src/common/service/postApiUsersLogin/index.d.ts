/** eslint-disabled */
/** @ts-nocheck */

export interface PostApiUsersLoginRequestTypes {
  /**
   * 用户名
   */
  username: string;
  /**
   * 密码
   */
  password: string;
}

export interface PostApiUsersLoginResponseTypes {
  data: {
    token: string;
  };
  code: number;
  message: string;
}

export default function postApiUsersLogin<
  P = PostApiUsersLoginRequestTypes,
  R = PostApiUsersLoginResponseTypes
>(allParams: P, options?: Record<string, any>): Promise<R>;
