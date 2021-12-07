import { HttpException } from "@nestjs/common";
import { HttpCode } from 'src/common/enums/http'

export class HttpError extends HttpException {
  constructor (code: HttpCode) {
    super(null, code)
  }
}