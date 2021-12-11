/** eslint-disabled */
/** @ts-nocheck */

export interface PostApiWorkV1CreateRequestTypes {
  /**
   * 业务线名称
   */
  name: string;
  /**
   * 业务线简介
   */
  description: string;
}




export default function postApiWorkV1Create <
  P = PostApiWorkV1CreateRequestTypes,
  R = any
>(
  allParams: P,
  options?: Record<string, any>
): Promise<R>