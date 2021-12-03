import { PageContainer } from "@ant-design/pro-layout";
import { Card } from "antd";
import { MENU_TAB_OPTIONS, CREATE_ACTION } from "./constant";
import CreateProjectModal from "./CreateProjectModal";
import ProjectCardList from "./ProjectCardList";
import ProCard from "@ant-design/pro-card";

export default () => {
  return (
    <PageContainer
      fixedHeader
      tabList={MENU_TAB_OPTIONS}
      extra={[<CreateProjectModal action={CREATE_ACTION.ADD} />]}
    >
      <ProCard split="vertical">
        <ProCard title="左侧详情" colSpan="30%">
          左侧内容
        </ProCard>
        <ProCard title="左右分栏子卡片带标题" headerBordered>
          <ProjectCardList />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};
