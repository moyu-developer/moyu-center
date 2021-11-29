import { useState } from "react";
import { Outlet, Link } from 'react-router-dom'
import { Descriptions, Avatar} from "antd";
import { UserOutlined } from "@ant-design/icons";
import logo from '../icons/logo.svg'

import type { ProSettings } from "@ant-design/pro-layout";

const BASE_PATH: string = '/project'

import ProLayout, {
  SettingDrawer,
} from "@ant-design/pro-layout";

import baseRouter from 'config/baseRouter'

export default () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    navTheme: 'light',
    layout: 'top'
  });
  const [pathname, setPathname] = useState(BASE_PATH);
  return (
    <div
      id="moyu-center"
      style={{
        height: "100vh",
      }}
    >
      <ProLayout
        route={baseRouter[0]}
        location={{
          pathname,
        }}
        title="Moyu Center"
        logo={logo}
        waterMarkProps={{
          content: "Moyu Manage",
        }}
        layout="top"
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <Link
            to={item.path || BASE_PATH}
            onClick={() => {
              setPathname(item.path || BASE_PATH);
            }}
          >
            {dom}
          </Link>
        )}
        rightContentRender={() => (
          <div>
            <Avatar shape="square" size="small" icon={<UserOutlined />} />
          </div>
        )}
        {...settings}
      >
        <Outlet/>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        getContainer={() => document.getElementById("moyu-center")}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting);
        }}
        disableUrlParams
      />
    </div>
  );
};
