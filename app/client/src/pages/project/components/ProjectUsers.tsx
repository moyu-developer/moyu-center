import { Button, Tag, Space, Alert, Popconfirm } from "antd";
import ProList from "@ant-design/pro-list";
import CreateWorkSpace from './CreateWorkSpace'
import { useDispatch } from "react-redux";
import type { Dispatch } from "src/model";

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

export default function () {

  const dispatch: Dispatch = useDispatch()

  return (
    <div className="project-view__content__menu">
      <ProList<any>
        size="small"
        toolBarRender={() => [
          <Button key="add" type="link">
            前往用户中心
          </Button>,
          <CreateWorkSpace key="d" payload={1} />
        ]}
        onRow={(record: any) => ({
          onMouseEnter: () => {
            console.log(record);
          },
          onClick: () => {
            console.log(record);
          },
        })}
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
            render: () => (
              <Space size={0}>
                <Tag color="blue">Ant Design</Tag>
              </Space>
            ),
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
      <Alert
      message="危险动作"
      description="您确认要删除该业务线吗？删除后业务线下所有的服务和项目将被清空。"
      type="error"
      showIcon
      action={
        <Popconfirm title="确认删除" okText="我确定" onConfirm={() => dispatch.project.deleteWorkFormById()}>
          <Button danger>
            我要删除
          </Button>
        </Popconfirm>
        
      }
    />
    </div>
  );
}
