import { NavigateFunction } from "react-router-dom";
import { createModel } from "@rematch/core";
import { RootModel } from "./connect";
import getApiUsersV1Info, { GetApiUsersV1InfoResponseTypes } from "src/common/service/getApiUsersV1Info";
interface CommonState {
  token: string,
  navigate?: NavigateFunction,
  user?: GetApiUsersV1InfoResponseTypes['data']
}

const initializeCommonState: CommonState = {
  token: '',
}

export default createModel<RootModel>()({
  name: 'common',
  state: initializeCommonState,
  effects: (dispatch) => ({
    async getUserInfo() {
      try {
        const { data } = await getApiUsersV1Info({})
        dispatch.common.setUserInfo(data)
      } catch (error) {
        throw error
      }
    }
  }),
  reducers: {

    /** 设置用户token */
    setToken(state, token: CommonState['token']) {
      return {
        ...state,
        token
      }
    },

    /** 设置navigate，用于全局路由js逻辑跳转 */
    setNavigateInstance(state, payload: CommonState['navigate']) {
      return {
        ...state,
        navigate: payload
      }
    },

    /** 设置用户信息 */
    setUserInfo(state, payload: CommonState['user']) {
      return {
        ...state,
        user: payload
      }
    }
  },
})