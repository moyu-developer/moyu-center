import { createModel } from "@rematch/core";
import type { RootModel } from "src/model/connect";
import store from "src/model";
import type { CreateWorkSpacePayload } from "src/common/api/work";
import { createWorkSpace } from "src/common/api/work";

export type ProjectModel = typeof projectModel;
interface ProjectState {
}

const initializeProjectState: ProjectState = {};

const projectModel = createModel<RootModel>()({
  state: initializeProjectState,
  effects: () => ({
    /**
     * 创建一条业务线，初始化时，可以拉入一些新的用户。
     * @param payload { CreateWorkSpacePayload } 创建业务线的payload
     * @returns 创建是否成功
     */
    createCurrentWorkForm: async (payload: CreateWorkSpacePayload) => {
      const { data = false } = await createWorkSpace(payload)
      return data
    },

    deleteWorkFormById: async (id: string) => {
      const { data = false } = await 
    }
  }),
  reducers: {},
});

store.addModel({ name: "project", ...projectModel });
