import { useState } from "react";
import { PageContainer } from "@ant-design/pro-layout";
import { MENU_TAB_OPTIONS, CREATE_ACTION } from "./constant";
import CreateProjectModal from "./components/CreateProjectModal";
import CreateWorkSpaceModal from "./components/CreateWoekSpace";
import ProjectCardList from "./components/ProjectCardList";
import ProjectUsers from "./components/ProjectUsers";
import OperatingLog from "./components/OperatingLog";
import Setting from "./components/Setting";
import ProCard from "@ant-design/pro-card";
import { Badge, Menu } from "antd";
import './index.less'

export default () => {
  const [selectContentKey, setSelectContentKey] = useState("list");

  return (
    <PageContainer
      tabList={MENU_TAB_OPTIONS}
      extra={[
        <CreateWorkSpaceModal key="create-work" />,
        <CreateProjectModal key="create-project" action={CREATE_ACTION.ADD} />,
      ]}
    >
      <div className="project-view">
        <ProCard split="vertical" className="project-view__content">
          <ProCard title="业务线归属" colSpan="250px">
            <Menu className="project-view__content__menu" selectedKeys={['1']} direction="ltr">
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
            <ProCard.TabPane key="list" tab="项目服务">
              <ProjectCardList />
            </ProCard.TabPane>
            <ProCard.TabPane key="operating" tab="操作记录">
              <OperatingLog />
            </ProCard.TabPane>
            <ProCard.TabPane key="users" tab="成员列表">
              <ProjectUsers />
            </ProCard.TabPane>
            <ProCard.TabPane key="setting" tab="业务线设置">
              <Setting />
            </ProCard.TabPane>
          </ProCard>
        </ProCard>
      </div>
    </PageContainer>
  );
};
