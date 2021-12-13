import { Button, Tag, Space } from "antd";
import ProList from "@ant-design/pro-list";

const dataSource = [
  {
    name: "语雀的天空",
    image:
      "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
    desc: "我是一条测试的描述",
  },
  {
    name: "Ant Design",
    image:
      "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
    desc: "我是一条测试的描述",
  },
  {
    name: "蚂蚁金服体验科技",
    image:
      "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
    desc: "我是一条测试的描述",
  },
  {
    name: "TechUI",
    image:
      "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
    desc: "我是一条测试的描述",
  },
];

export default () => (
  <div className="project-view__content__menu">
    <ProList<any>
      size="small"
      toolBarRender={() => {
        return [
          <Button key="add" type="link">
            前往用户中心
          </Button>,
          <Button key="add" type="primary">
            邀请成员
          </Button>,
        ];
      }}
      onRow={(record: any) => {
        return {
          onMouseEnter: () => {
            console.log(record);
          },
          onClick: () => {
            console.log(record);
          },
        };
      }}
      rowKey="name"
      headerTitle="当前加入的成员"
      dataSource={dataSource}
      showActions="hover"
      showExtra="hover"
      metas={{
        title: {
          dataIndex: "name",
        },
        avatar: {
          dataIndex: "image",
        },
        description: {
          dataIndex: "desc",
        },
        subTitle: {
          render: () => {
            return (
              <Space size={0}>
                <Tag color="blue">Ant Design</Tag>
                <Tag color="#5BD8A6">TechUI</Tag>
              </Space>
            );
          },
        },
        actions: {
          render: (text, row) => [
            <a
              href={row.html_url}
              target="_blank"
              rel="noopener noreferrer"
              key="link"
            >
              链路
            </a>,
            <a
              href={row.html_url}
              target="_blank"
              rel="noopener noreferrer"
              key="warning"
            >
              报警
            </a>,
            <a
              href={row.html_url}
              target="_blank"
              rel="noopener noreferrer"
              key="view"
            >
              查看
            </a>,
          ],
        },
      }}
    />
  </div>
);
