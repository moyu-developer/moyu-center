import { Avatar, Dropdown, Menu, Space, Typography, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import type { RootState, Dispatch } from "src/model";

export default (function () {
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.common.user);

  const dispatch: Dispatch = useDispatch();

  const onUserLogout = () => {
    localStorage.removeItem("access_token");
    dispatch.common.setToken("");
    dispatch.common.setUserInfo(undefined);
    notification.success({
      message: "再见👋， 即将前往登录",
      description: "退出登录成功，即将前往登录页面，相关信息已经清楚。",
    });
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item key="0">
            <a href="https://www.antgroup.com">个人中心</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3" onClick={onUserLogout}>
            退出登录
          </Menu.Item>
        </Menu>
      }
      trigger={["click"]}
    >
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <Space>
          <Typography.Link>{user?.username}</Typography.Link>
          <Avatar
            shape="square"
            size="small"
            src={
              user?.avatar ||
              "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            }
          />
        </Space>
      </a>
    </Dropdown>
  );
});
