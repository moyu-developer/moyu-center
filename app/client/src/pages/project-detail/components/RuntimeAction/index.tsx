import { Button, Space } from 'antd';
export default (() => {
  return <Space>
    <Button type='primary'>生成代码</Button>
    <Button type='primary'>运行/调试</Button>
    <Button ghost danger>删除</Button>
  </Space>
})