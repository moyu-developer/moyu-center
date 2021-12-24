import { PlusOutlined } from "@ant-design/icons"
import { Button, Dropdown, Input, Menu, Space } from "antd"

export default (() => {

  const RenderMenu = (
    <Menu>
      <Menu.Item>新建接口</Menu.Item>
      <Menu.Item>新建分类</Menu.Item>
      <Menu.Item>快速导入</Menu.Item>
    </Menu>
  );

  return <Space>
    <Input maxLength={15} allowClear  placeholder="搜索当前接口列表" />
    <Dropdown overlay={RenderMenu}>
    <Button icon={<PlusOutlined />} type="primary" />
    </Dropdown>
    
  </Space>
})