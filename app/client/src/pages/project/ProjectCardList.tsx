import { Row, Col, Card, Avatar } from "antd";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

import type { FC } from "react";

export interface ProjectCardListProps {
  status: string | number;
}

export default (() => {
  return (
    <Row gutter={[20, 20]}>
      {[1, 23].map((item) => {
        return (
          <Col span={3} key={item}>
            <Card
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Card.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}) as FC<ProjectCardListProps>;
