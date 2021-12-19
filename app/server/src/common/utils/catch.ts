import type { HttpStatus } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
export class GlobalServiceError extends HttpException {
  constructor(code: HttpStatus, message?: string) {
    super({
      message: message || ''
    }, code);
  }
}
