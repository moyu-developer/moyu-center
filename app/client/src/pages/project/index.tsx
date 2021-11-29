import { PageContainer } from "@ant-design/pro-layout";
import { Card } from "antd";
import { MENU_TAB_OPTIONS, CREATE_ACTION } from "./constant";
import CreateProjectModal from "./CreateProjectModal";
import ProjectCardList from "./ProjectCardList";

export default () => {
  return (
    <PageContainer
      fixedHeader
      tabList={MENU_TAB_OPTIONS}
      extra={[<CreateProjectModal action={CREATE_ACTION.ADD} />]}
    >
      <ProjectCardList/>
    </PageContainer>
  );
};
