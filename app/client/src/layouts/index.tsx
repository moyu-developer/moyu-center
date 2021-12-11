import { useState, useEffect } from "react";
import { Outlet, Link,  } from 'react-router-dom'
import logo from '../icons/logo.svg'
import AvatarBar from './AvatarBar'

import type { ProSettings } from "@ant-design/pro-layout";

const BASE_PATH: string = '/project'

import ProLayout, {
  SettingDrawer,
} from "@ant-design/pro-layout";

import baseRouter from 'config/baseRouter'

export default () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixedHeader: true,
    navTheme: 'light',
    layout: 'top'
  });
  const [pathname, setPathname] = useState(BASE_PATH);

  useEffect(() => {
  }, [])

  return (
    <div
      id="moyu-center"
      style={{
        height: "100%",
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
            <AvatarBar/>
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
