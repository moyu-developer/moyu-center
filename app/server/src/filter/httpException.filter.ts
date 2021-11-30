import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { codeMessage, HttpCode } from '../common/http'

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    /** 获取请求上下文 */
    const context = host.switchToHttp()

    /** 获取请求响应信息 */
    const response = context.getResponse()

    /** http状态 */
    const httpStatus = exception.getStatus()

    const message = exception.message || codeMessage[httpStatus] || '服务器繁忙，请稍后再试'

    response.status(200);
    response.send({
      data: null,
      message,
      code: HttpCode.SERVER_FAIL
    })
  }
}
