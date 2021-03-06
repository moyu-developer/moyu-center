import { useState } from "react";
import ProCard from "@ant-design/pro-card";
import { Menu, Descriptions, Typography } from 'antd';
import RuntimeAction from "../RuntimeAction";
import SearchToolBar from "../SearchToolBar";
import HttpMethodTag from "src/components/HttpMethodTag";
import DayJS from 'dayjs'
import { DateFormatRule } from "src/common/constant";
import ReadonlyJSONView from 'src/components/ReadonlyJSONView';
import InterfaceParams from '../InterfaceParams'

const { SubMenu } = Menu;

export default function () {
  const [selectContentKey, setSelectContentKey] = useState("query");

  return (
    <div>
      <ProCard split="vertical">
        <ProCard title={<SearchToolBar />} colSpan="250px">
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            <Menu.Item key="1">Navigation One</Menu.Item>
            <Menu.Item key="2">Navigation Two</Menu.Item>
            <SubMenu key="sub1" title="Navigation Two">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
              <SubMenu key="sub1-2" title="Submenu">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub2" title="Navigation Three">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
            </SubMenu>
            <Menu.Item key="link">
              <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ant Design
              </a>
            </Menu.Item>
          </Menu>
        </ProCard>
        <ProCard
          tabs={{
            activeKey: selectContentKey,
            onChange: setSelectContentKey,
          }}
        >
          <ProCard.TabPane key="query" tab="??????">
            <div>
              <Descriptions
                title="????????????"
                extra={<RuntimeAction />}
                column={5}
              >
                <Descriptions.Item label="ProjectId">
                  <Typography.Link copyable>{'api1233444444444'}</Typography.Link>
                </Descriptions.Item>
                <Descriptions.Item label="????????????">????????????????????????</Descriptions.Item>
                <Descriptions.Item label="?????????">wangly19</Descriptions.Item>
                <Descriptions.Item label="????????????">--</Descriptions.Item>
                <Descriptions.Item label="????????????">{ DayJS().format(DateFormatRule) }</Descriptions.Item>
              </Descriptions>
              <Descriptions column={5}>
                <Descriptions.Item label="????????????" span={1}>
                  {<HttpMethodTag method="POST" />}
                  <Typography.Link copyable>{'/work/v1/list'}</Typography.Link>
                </Descriptions.Item>
                <Descriptions.Item label="Mock????????????" span={4}>
                  <Typography.Link copyable>{'http://localhost:3000/project/detail'}</Typography.Link>
                </Descriptions.Item>
                <Descriptions.Item label="????????????" span={5}>
                  Updates a pet in the store with form data Copy
                </Descriptions.Item>
              </Descriptions>
              <Descriptions title="????????????">
              <Descriptions.Item>
                <InterfaceParams/>
                </Descriptions.Item>
              </Descriptions>
              <Descriptions title="???????????????">
                <Descriptions.Item>
                  <ReadonlyJSONView json={{ a: 1 }} />
                </Descriptions.Item>
              </Descriptions>
            </div>
          </ProCard.TabPane>
          <ProCard.TabPane key="change" tab="??????">
            2
          </ProCard.TabPane>
          <ProCard.TabPane key="runtime" tab="??????">
            3
          </ProCard.TabPane>
          <ProCard.TabPane key="mockjs" tab="Mock??????">
            3
          </ProCard.TabPane>
        </ProCard>
      </ProCard>
    </div>
  );
}
