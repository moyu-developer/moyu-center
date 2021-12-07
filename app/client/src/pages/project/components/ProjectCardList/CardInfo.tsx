import { FC } from "react";

export interface CardInfoProps {
  count: React.ReactNode;
  users: React.ReactNode;
  className?: string
}

export default ((props) => {
  return (<div className={props.className}>
    <div>
      <p>接口总数</p>
      <p>{props.count}</p>
    </div>
    <div>
      <p>项目成员</p>
      <p>{props.users}</p>
    </div>
  </div>)
}) as FC<CardInfoProps>