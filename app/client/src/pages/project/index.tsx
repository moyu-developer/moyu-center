import { useState, useEffect } from 'react';
import { PageContainer } from "@ant-design/pro-layout";
import ProCard from "@ant-design/pro-card";
import { Menu, Result, Typography } from 'antd';
import { MENU_TAB_OPTIONS, CREATE_ACTION } from "./constant";
import { useDispatch, useSelector } from 'react-redux';
import CreateProjectModal from "./components/CreateProjectModal";
import CreateWorkSpaceModal from "./components/CreateWorkSpace";
import ProjectCardList from "./components/ProjectCardList";
import ProjectUsers from "./components/ProjectUsers";
import OperatingLog from "./components/OperatingLog";
import styles from "./index.module.less";

import './model'
import type { Dispatch } from "src/model";
import type { RootState } from '../../model/index';

export default function () {
  const [selectContentKey, setSelectContentKey] = useState('list');

  const dispatch: Dispatch = useDispatch()

  /** 获取当前业务线列表 */
  const { workList, currentWorkId } = useSelector((state: RootState) => ({
    workList: state.project.workList,
    currentWorkId: state.project.currentWorkId
  }))

  useEffect(() => {
    dispatch.project.getCurrentWorkList()
  }, [dispatch])

  return (
    <PageContainer
      tabList={MENU_TAB_OPTIONS}
      onTabChange={dispatch.project.getCurrentWorkList}
      extra={[
        <CreateWorkSpaceModal key="create-work" />,
        <CreateProjectModal key="create-project" action={CREATE_ACTION.ADD} />,
      ]}
    >
      <div className={styles.project}>
        <ProCard split="vertical" className={styles.projectBody}>
          <ProCard title="业务线归属" colSpan="250px">
            <Menu
              className={styles.projectMenu}
              selectedKeys={currentWorkId ? [currentWorkId] : []}
              mode="inline"
              onSelect={(row) => dispatch.project.changeMenuItem(row.key)}
            >
              {
                workList.map(work => <Menu.Item key={work._id}>
                  <Typography.Paragraph ellipsis={{ rows: 1 }}>{work.name}</Typography.Paragraph>
                
              </Menu.Item>)
              }
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
            <ProCard.TabPane key="users" tab="业务线设置">
              <ProjectUsers />
            </ProCard.TabPane>
          </ProCard>
        </ProCard>
      </div>
    </PageContainer>
  );
}
