import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor} from '@nestjs/common';
import {
  Injectable
} from '@nestjs/common';
import type { Observable} from 'rxjs';
import { map } from 'rxjs';
import { HttpCode, codeMessage } from '../enums/http';

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        data,
        code: HttpCode.SUCCESS,
        message: codeMessage[HttpCode.SUCCESS],
      })),
    );
  }
}
