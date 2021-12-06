import { useState } from 'react'
import { PageContainer } from "@ant-design/pro-layout";
import { MENU_TAB_OPTIONS, CREATE_ACTION } from "./constant";
import CreateProjectModal from "./CreateProjectModal";
import ProjectCardList from "./components/ProjectCardList";
import ProjectUsers from "./ProjectUsers";
import OperatingLog from './OperatingLog';
import Setting from './Setting';
import ProCard from "@ant-design/pro-card";
import { Button, Badge } from "antd";
import styles from './index.module.less'

export default () => {

  const [ selectContentKey, setSelectContentKey ] = useState('list')

  return (
    <PageContainer
      tabList={MENU_TAB_OPTIONS}
      extra={[
        <Button type="primary" danger key="delete-action">
          批量删除
        </Button>,
        <CreateProjectModal action={CREATE_ACTION.ADD} key="create-action" />,
      ]}
    >
      <div className={ styles.projectView }>
      <ProCard split="vertical" className={styles.projectContent}>
        <ProCard title="业务线归属" colSpan="250px" >
          <div>
          <Badge status="processing" text="Processing" />
          </div>
        </ProCard>
        <ProCard
          tabs={{
            activeKey: selectContentKey,
            onChange: setSelectContentKey
          }}
        >
          <ProCard.TabPane key="list" tab="项目服务">
            <ProjectCardList />
          </ProCard.TabPane>
          <ProCard.TabPane key="operating" tab="操作记录">
            <OperatingLog/>
          </ProCard.TabPane>
          <ProCard.TabPane key="users" tab="成员列表">
            <ProjectUsers/>
          </ProCard.TabPane>
          <ProCard.TabPane key="setting" tab="业务线设置">
            <Setting/>
          </ProCard.TabPane>
        </ProCard>
      </ProCard>
      </div>
    </PageContainer>
  );
};
