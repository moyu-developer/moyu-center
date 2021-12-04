import { Row, Col, Card, Avatar } from "antd";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import ProCard from "@ant-design/pro-card";

import type { FC } from "react";

const arr = Array.from(new Array(10 + 1).keys()).slice(1);

export interface ProjectCardListProps {
  status?: string | number;
}

export default (() => {
  return (
    <Row gutter={[20, 20]} justify="start">
      {arr.map((item) => {
        return (
          <Col key={item}>
            <ProCard
              bordered
              title="Actions 操作项"
              style={{ width: 250 }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <div>Card content</div>
              <div>Card content</div>
              <div>Card content</div>
            </ProCard>
          </Col>
        );
      })}
    </Row>
  );
}) as FC<ProjectCardListProps>;
