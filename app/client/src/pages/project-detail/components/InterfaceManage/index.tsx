import { useState } from "react";
import ProCard from "@ant-design/pro-card";
import { Tree, Menu } from "antd";

import styles from "./index.module.less";

const { SubMenu } = Menu;

export default function () {
  const [selectContentKey, setSelectContentKey] = useState("interface");

  return (
    <div>
      <ProCard split="vertical">
        <ProCard title="业务线归属" colSpan="250px">
        <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="1" >
          Navigation One
        </Menu.Item>
        <Menu.Item key="2">
          Navigation Two
        </Menu.Item>
        <SubMenu key="sub1" title="Navigation Two">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
          <SubMenu key="sub1-2" title="Submenu">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub2" title="Navigation Three">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
        </SubMenu>
        <Menu.Item key="link">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Ant Design
          </a>
        </Menu.Item>
      </Menu>
        </ProCard>
        <ProCard
          tabs={{
            activeKey: selectContentKey,
            onChange: setSelectContentKey,
          }}
        >
          <ProCard.TabPane key="query" tab="查看">
            1
          </ProCard.TabPane>
          <ProCard.TabPane key="change" tab="编辑">
            2
          </ProCard.TabPane>
          <ProCard.TabPane key="runtime" tab="运行">
            3
          </ProCard.TabPane>
          <ProCard.TabPane key="mockjs" tab="Mock服务">
            3
          </ProCard.TabPane>
        </ProCard>
      </ProCard>
    </div>
  );
}
