import { HttpException } from "@nestjs/common";
import { HttpCode } from 'src/common/enums/http'

export class GlobalServiceError extends HttpException {
  constructor (code: HttpCode, message?: string) {
    super(message, code)
  }
}