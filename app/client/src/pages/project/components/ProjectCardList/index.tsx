import { Tooltip, Card, List, Avatar } from "antd";
import {
  SettingOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import styles from "./index.module.less";

import type { FC } from "react";

const arr = Array.from(new Array(10 + 1).keys()).slice(1);

export interface ProjectCardListProps {
  status?: string | number;
}

export default () => {
  const CardInfo: React.FC<{
    activeUser: React.ReactNode;
    newUser: React.ReactNode;
  }> = ({ activeUser, newUser }) => (
    <div className={styles.cardInfo}>
      <div>
        <p>活跃用户</p>
        <p>{activeUser}</p>
      </div>
      <div>
        <p>新增用户</p>
        <p>{newUser}</p>
      </div>
    </div>
  );

  return (
    <div className={styles.projectList}>
      <List
        grid={{ gutter: 24, xxl: 6, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
        dataSource={arr}
        renderItem={(item) => (
          <List.Item key={item}>
            <Card
              hoverable
              bodyStyle={{ paddingBottom: 20 }}
              actions={[
                <Tooltip key="download" title="下载">
                  <SettingOutlined />
                </Tooltip>,
                <Tooltip title="编辑" key="edit">
                  <EditOutlined />
                </Tooltip>,
                <Tooltip title="删除" key="ellipsis">
                  <DeleteOutlined />
                </Tooltip>,
              ]}
            >
              <Card.Meta
                avatar={
                  <Avatar
                    size="small"
                    src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"
                  />
                }
                title="阿里巴巴"
              />
              <div>
                <CardInfo activeUser="0.0" newUser="0.0" />
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
