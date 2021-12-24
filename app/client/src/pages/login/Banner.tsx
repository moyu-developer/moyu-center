import { Carousel, Space } from "antd";
import authLogo from "src/icons/login/auth.svg";
import docsLogo from "src/icons/login/docs.svg";
import endLogo from "src/icons/login/end.svg";
import progressLogo from "src/icons/login/progress.svg";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styles from "./index.module.less";

const bannerList = [
  {
    logo: docsLogo,
    title: "接口文档管理",
    description: "遵循 OpenAPI(Swagger) 规范",
  },

  {
    logo: progressLogo,
    title: "团队协作管理",
    description: "文档一体化",
  },
  {
    logo: endLogo,
    title: "Mock服务集成",
    description: "集成Mock.js相关功能",
  },
  {
    logo: authLogo,
    title: "权限管理，职能分工",
    description: "业务组权限控制",
  },
];

export default function () {
  return (
    <Carousel
      dotPosition="bottom"
      arrows
      autoplay
      autoplaySpeed={4000}
      prevArrow={<LeftOutlined />}
      nextArrow={<RightOutlined />}
    >
      {bannerList.map((item) => (
        <div className={styles.banner} key={item.title}>
          <Space direction="vertical" align="center">
            <div className={styles.bannerText}>{item.title}</div>

            <div className={styles.bannerSubText}>{item.description}</div>
          </Space>
          <img src={item.logo} className={styles.bannerImage} />
        </div>
      ))}
    </Carousel>
  );
}
