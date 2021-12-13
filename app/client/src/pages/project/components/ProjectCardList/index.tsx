import { Tooltip, Card, List, Avatar, Modal, message } from "antd";
import {
  SettingOutlined,
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined
} from "@ant-design/icons";

import CardInfo from './CardInfo'

import styles from "./index.module.less";

import { CARD_ACTION } from '../../constant'

const arr = Array.from(new Array(10 + 1).keys()).slice(1);

export interface ProjectCardListProps {
  status?: string | number;
}

export default () => {

  const handleCardAction = <T extends any>(action: CARD_ACTION, payload?: T) => {
    switch (action) {
      case CARD_ACTION.CHANGE:
        
        break;
        case CARD_ACTION.SETTING:
          
          break;
          case CARD_ACTION.DELETE:
            Modal.confirm({
              title: '是否删除该项目？',
              icon: <ExclamationCircleOutlined style={{color: 'red'}} />,
              content: '项目删除后，所有的接口将消失，将不可找回，请谨慎操作。如需删除，点击确定即可。',
              maskClosable: true,
              okButtonProps: {
                danger: true,
              },
              onOk() {
                message.success('删除成功')
              },
            })
        
        break;
    
      default:
        
        break;
    }
  }
  

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
                <Tooltip key="download" title="去设置">
                  <SettingOutlined />
                </Tooltip>,
                <Tooltip title="编辑" key="edit">
                  <EditOutlined />
                </Tooltip>,
                <Tooltip title="删除" key="ellipsis">
                  <DeleteOutlined onClick={ () => handleCardAction(CARD_ACTION.DELETE, ) } />
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
                <CardInfo count="0个" users="0位" className={styles.cardInfo} />
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
