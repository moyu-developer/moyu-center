/** eslint-disabled */
/** @ts-nocheck */

export interface GetApiRequestTypes {}




export default function getApi <
  P = GetApiRequestTypes,
  R = any
>(
  allParams: P,
  options?: Record<string, any>
): Promise<R>