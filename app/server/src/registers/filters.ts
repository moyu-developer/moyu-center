import { INestApplication } from '@nestjs/common'
import { HttpExceptionFilter } from '../filters/httpException.filter'

export default function (app: INestApplication) {
  app.useGlobalFilters(new HttpExceptionFilter())
}