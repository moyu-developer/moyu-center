/** eslint-disabled */
/** @ts-nocheck */

export interface PutApiWorkV1ChangeIdRequestTypes {
  /**
   * 业务线名称
   */
  name?: string;
  /**
   * 业务线简介
   */
  description: string;
  id?: string;
}




export default function putApiWorkV1ChangeId <
  P = PutApiWorkV1ChangeIdRequestTypes,
  R = any
>(
  allParams: P,
  options?: Record<string, any>
): Promise<R>