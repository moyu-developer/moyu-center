import { DownOutlined } from "@ant-design/icons"
import { Avatar, Dropdown, Menu, Space, Typography } from 'antd';
import { useSelector } from "react-redux";

import type { RootState } from 'src/model';

export default (() => {

  const user = useSelector((state: RootState) => state.common.user)

  return <Dropdown overlay={
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      <Space>
        <Typography.Link>{ user?.username }</Typography.Link>
        <Avatar shape="square" size="small" src={ user?.avatar || 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png' } />
        <DownOutlined size={24} />
      </Space>
    </a>
  </Dropdown>
})