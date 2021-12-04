import { PageContainer } from "@ant-design/pro-layout";
import { MENU_TAB_OPTIONS, CREATE_ACTION } from "./constant";
import CreateProjectModal from "./CreateProjectModal";
import ProjectCardList from "./ProjectCardList";
import ProCard from "@ant-design/pro-card";
import { Button, Badge } from "antd";
import styles from './index.module.less'

export default () => {
  return (
    <PageContainer
      tabList={MENU_TAB_OPTIONS}
      extra={[
        <Button type="primary" danger>
          批量删除
        </Button>,
        <CreateProjectModal action={CREATE_ACTION.ADD} />,
      ]}
    >
      <ProCard split="vertical">
        <ProCard title="业务线归属" colSpan="250px" >
        </ProCard>
        <ProCard
          tabs={{
            activeKey: "tab1",
          }}
        >
          <ProCard.TabPane key="tab1" tab="项目服务">
            <ProjectCardList />
          </ProCard.TabPane>
          <ProCard.TabPane key="tab2" tab="操作记录">
            内容二
          </ProCard.TabPane>
          <ProCard.TabPane key="tab3" tab="成员列表">
            内容二
          </ProCard.TabPane>
          <ProCard.TabPane key="tab4" tab="业务线设置">
            内容二
          </ProCard.TabPane>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};
