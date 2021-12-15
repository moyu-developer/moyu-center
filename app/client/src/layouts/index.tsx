import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import ProLayout, { ProSettings, SettingDrawer } from "@ant-design/pro-layout";

import baseRouter from "config/baseRouter";
import AvatarBar from "./AvatarBar";
import logo from "../icons/logo.svg";

const BASE_PATH = "/";

export default () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixedHeader: true,
    navTheme: "light",
    layout: "top",
  });

  const location = useLocation();

  useEffect(() => {}, []);

  return (
    <div
      id="moyu-center"
      style={{
        height: "100%",
      }}
    >
      <ProLayout
        route={baseRouter[0]}
        location={location}
        title="Moyu Center"
        logo={logo}
        waterMarkProps={{
          content: "Moyu Manage",
        }}
        layout="top"
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <Link to={item.path || BASE_PATH}>{dom}</Link>
        )}
        rightContentRender={() => (
          <div>
            <AvatarBar />
          </div>
        )}
        {...settings}
      >
        <Outlet />
      </ProLayout>
      <SettingDrawer
        pathname={location.pathname}
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
