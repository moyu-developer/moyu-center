/** eslint-disabled */
/** @ts-nocheck */

export interface GetApiUsersIdRequestTypes {
  id?: string;
}




export default function getApiUsersId <
  P = GetApiUsersIdRequestTypes,
  R = any
>(
  allParams: P,
  options?: Record<string, any>
): Promise<R>