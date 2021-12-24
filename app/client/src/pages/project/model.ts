import { createModel } from "@rematch/core";
import type { RootModel } from "src/model/connect";
import store from "src/model";
import type { CreateWorkSpacePayload, Work} from "src/common/api/work";
import { createWorkSpace , deleteWorkSpace, getWorkSpaceList } from "src/common/api/work";
import { message } from 'antd';
export type ProjectModel = typeof projectModel;
interface ProjectState {
  workList: Work[]
  currentWorkId: string,
  action: number
}

const initializeProjectState: ProjectState = {
  workList: [],
  currentWorkId: '',
  action: 0,
};

const projectModel = createModel<RootModel>()({
  state: initializeProjectState,
  effects: (dispatch) => ({
    /**
     * 创建一条业务线，初始化时，可以拉入一些新的用户。
     * @param payload { CreateWorkSpacePayload } 创建业务线的payload
     * @returns 创建是否成功
     */
    createCurrentWorkForm: async (payload: CreateWorkSpacePayload) => {
      const { data, message: errMsg } = await createWorkSpace(payload)
      message[data ? 'success' : 'error'](data ? '添加业务线成功' : `添加业务线失败: ${errMsg}`)
      return data
    },

    /**
     * 通过ObjectId删除一条业务线
     * @param id 业务线id
     * @returns 是否删除成功
     */
    deleteWorkFormById: async (_, state: any) => {
      const { data = false, message: errMsg } = await deleteWorkSpace(state.project.currentWorkId)
      await dispatch.project.getCurrentWorkList()
      message[data ? 'success' : 'error'](data ? '删除业务线成功' : `删除业务线失败: ${errMsg}`)
      return data
    },

    /**
     * 获取当前业务线列表
     * @param action 创建 or 加入
     */
    getCurrentWorkList: async (action?: string) => {
      const { data } = await getWorkSpaceList(action ? Number(action) : undefined)
      if (Array.isArray(data) && data.length > 1) {
        dispatch.project.saveWorkList(data)
        dispatch.project.changeMenuItem(data[0]._id)
      }
    }
  }),
  reducers: {
    saveWorkList(state, list) {
      console.log(list)
      return {
        ...state,
        workList: list
      }
    },

    changeMenuItem(state, id) {
      console.log(id, 'id')
      return {
        ...state,
        currentWorkId: id
      }
    },

    changeTabActiveKey(state, action) {
      return {
        ...state,
        action
      }
    }
  },
});

store.addModel({ name: "project", ...projectModel });
