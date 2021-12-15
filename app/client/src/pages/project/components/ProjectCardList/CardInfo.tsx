import { FC, ReactNode } from "react";

export interface CardInfoProps {
  count: ReactNode;
  users: ReactNode;
  className?: string;
}

export default ((props) => (
  <div className={props.className}>
    <div>
      <p>接口总数</p>
      <p>{props.count}</p>
    </div>
    <div>
      <p>项目成员</p>
      <p>{props.users}</p>
    </div>
  </div>
)) as FC<CardInfoProps>;
