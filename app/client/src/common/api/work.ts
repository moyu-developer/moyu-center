import request from 'src/common/tools/request';
import { HttpMethod } from '@moyu/request';
export const getWorkList = () => {
  return request({
    url: '/work/list',
    method: HttpMethod.GET
  })
}