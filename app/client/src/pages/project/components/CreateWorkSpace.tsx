import type { FC } from "react";
import { useMemo } from "react";
import { Button } from "antd";
import {
  ModalForm,
  ProFormGroup,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-form";
import type { Dispatch } from "src/model";
import type { CreateWorkSpacePayload } from 'src/common/api/work';
import { useDispatch } from "react-redux";

export interface CreateWorkSpaceModalProps {
  payload?: Record<string, any>;
}

export default ((props) => {

  const dispatch: Dispatch = useDispatch()

  console.log(dispatch.project, 'dispatch')

  const title = useMemo(
    () => ({
      text: props.payload ? "修改业务线" : "新建业务线",
      buttonType: props.payload ? "primary" : "link" 
    } as {
      text: string,
      buttonType: "primary" | "link" 
    }),
    [props.payload]
  );

  return (
    <ModalForm<Required<CreateWorkSpacePayload>>
      title={title.text}
      trigger={<Button type={ title.buttonType }>{title.text}</Button>}
      autoFocusFirstInput
      onFinish={dispatch.project.createCurrentWorkForm}
    >
      <ProFormGroup label="基本信息">
        <ProFormText
          width="md"
          name="name"
          label="业务线名称"
          tooltip="业务线名称尽可能简单，限制为8个字符"
          placeholder="请输入需要创建的业务线名称"
          fieldProps={{
            maxLength: 8,
          }}
          rules={[{ required: true, message: "请输入业务线名称" }]}
        />

        {
          title.buttonType === 'link' &&  <ProFormSelect
          width="md"
          name="users"
          label="业务线成员"
          showSearch
          debounceTime={300}
          placeholder="请选择需要添加的业务线成员"
          tooltip="创建业务线的时候，可以将你的成员快速的拉入当前空间内。"
        />
        }
        
      </ProFormGroup>
      <ProFormTextArea
        width="lg"
        name="description"
        label="业务线描述"
        placeholder="请输入名称"
        tooltip="业务线描述是对当前创建组的一个简单描述，让别人清晰知道是做什么的。"
      />
    </ModalForm>
  );
}) as FC<CreateWorkSpaceModalProps>;
