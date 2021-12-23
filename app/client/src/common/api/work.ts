import request from "src/common/tools/request";
import { HttpMethod } from "@moyu/request";

export interface CreateWorkSpacePayload {
  name: string;
  users?: string[];
  description?: string;
}

export interface Work {
  _id: string,
  name: string;
  description?: string;
}

/**
 * 通过payload创建一条业务线
 * @param data 创建的业务线
 * @returns 是否创建成功
 */
export const createWorkSpace = (
  data: CreateWorkSpacePayload
): GotResponse<boolean> => request.post("/work/v1/create", data);

/**
 * 
 * @param id 业务线ObjectID
 * @returns 是否删除成功
 */
export const deleteWorkSpace = (id: string): GotResponse<boolean> => request.delete(`/work/v1/delete/${id}`)

/**
 * 获取业务线列表
 * @returns 业务线列表
 */
export const getWorkSpaceList = (action?: number): GotResponse<Work[]> => request.get('/work/v1/list', {
  params: {
    action
  }
})
