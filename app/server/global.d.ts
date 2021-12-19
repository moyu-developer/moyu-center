import type { HttpStatus } from "@nestjs/common";

export interface BaseResponse<T = null> {
  code: HttpStatus,
  message: string,
  data: T
}

export type HttpResponse<T = null> = Promise<BaseResponse<T>>