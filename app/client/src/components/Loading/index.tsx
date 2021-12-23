import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "./index.module.less";

const antIcon = (
  <LoadingOutlined style={{ fontSize: 40 }} spin />
);

export default () => {
  return (
    <Spin indicator={antIcon}>
      <div className={styles.loading} />
    </Spin>
  );
};
