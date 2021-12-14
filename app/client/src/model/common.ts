import { NavigateFunction } from "react-router-dom";
import { createModel } from "@rematch/core";
import { RootModel } from "./connect";
import getApiUsersV1Info, { GetApiUsersV1InfoResponseTypes } from "src/common/service/getApiUsersV1Info";
import { notification, Typography } from 'antd';
import { createElement } from "react";
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
        notification.success({
          message: `你好，${data.username} 欢迎回来👏`,
          description: `开始体验Moyu🦑的新功能吧！更多Feature请查阅相关Break Change。`
        })
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