import { Tag } from "antd"
import type { FC } from 'react';

const Color = {
  'DELETE': 'red',
  'GET': 'blue',
  'PATCH': 'volcano',
  'POST': 'green',
  'PUT': 'purple'
}

export interface HttpMethodTagProps {
  method: keyof typeof Color
}
export default ((props) => {
  return <Tag color={Color[props.method || 'GET']}>{ props.method }</Tag>
}) as FC<HttpMethodTagProps>