import { useState } from "react";
import { PageContainer } from "@ant-design/pro-layout";
import ProCard from "@ant-design/pro-card";
import { Badge, Menu } from "antd";

const ProjectTabs = [
  {
    tab: "接口管理",
    key: "interface",
  },
  {
    tab: "测试管理",
    key: "test",
  },
  {
    tab: "项目设置",
    key: "settings",
  },
];

export default function () {
  const [selectContentKey, setSelectContentKey] = useState("interface");

  return (
    <PageContainer tabList={ProjectTabs}>
      <div>
        <ProCard split="vertical">
          <ProCard title="业务线归属" colSpan="250px">
            <Menu selectedKeys={["interface"]} direction="ltr">
              <Menu.Item key="1">
                <Badge status="processing" text="Success" />
              </Menu.Item>
            </Menu>
          </ProCard>
          <ProCard
            tabs={{
              activeKey: selectContentKey,
              onChange: setSelectContentKey,
            }}
          >
            <ProCard.TabPane key="interface" tab="项目服务">
              1
            </ProCard.TabPane>
            <ProCard.TabPane key="test" tab="操作记录">
              2
            </ProCard.TabPane>
            <ProCard.TabPane key="settings" tab="成员列表">
              3
            </ProCard.TabPane>
          </ProCard>
        </ProCard>
      </div>
    </PageContainer>
  );
}
