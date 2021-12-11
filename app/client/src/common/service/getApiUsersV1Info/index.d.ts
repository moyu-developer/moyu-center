/** eslint-disabled */
/** @ts-nocheck */

export interface GetApiUsersV1InfoRequestTypes {}

export interface GetApiUsersV1InfoResponseTypes {
  data: {
    username: string
    userId: string
    mobile: string
    iat: number;
    exp: number;
    jti: "token";
    avatar?: string;
  };
  code: 200;
  message: "服务器成功返回请求的数据。";
}

export default function getApiUsersV1Info<
  P = GetApiUsersV1InfoRequestTypes,
  R = GetApiUsersV1InfoResponseTypes
>(allParams: P, options?: Record<string, any>): Promise<R>;
