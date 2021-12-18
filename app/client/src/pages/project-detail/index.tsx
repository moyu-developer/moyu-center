import { PageContainer } from "@ant-design/pro-layout";
import { useState } from 'react';
import InterfaceManage from './components/InterfaceManage'

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

  const [currentView, setCurrentView] = useState('interface')

  return (
    <PageContainer tabList={ProjectTabs} onTabChange={key => setCurrentView(key)}>
      {
        currentView === 'interface' && <InterfaceManage/>
      }
    </PageContainer>
  );
}
