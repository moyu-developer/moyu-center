import { ArgumentsHost, Catch, ExceptionFilter, HttpException, BadRequestException } from '@nestjs/common';
import { codeMessage, HttpCode } from '../enums/http'

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    /** 获取请求上下文 */
    const context = host.switchToHttp()

    /** 获取请求响应信息 */
    const response = context.getResponse()

    /** http状态 */
    let httpStatus = HttpCode.SERVER_ERROR
    if (exception.getStatus) {
      exception.getStatus()
    }

    /** 获取当前的message */
    const message = exception.message || codeMessage[httpStatus] || '服务器繁忙，请稍后再试'

    console.log(httpStatus)

    response.status(200);
    response.send({
      data: null,
      message,
      code: httpStatus
    })
  }
}
