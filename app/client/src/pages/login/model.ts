import { createModel } from "@rematch/core";
import { RootModel } from "src/model/connect";
import store from 'src/model'
import { message } from 'antd';
import postApiUsersLogin, { PostApiUsersLoginRequestTypes } from 'src/common/service/postApiUsersLogin';
export type LoginModel = typeof loginModel


interface LoginState {
}

const initializeCommonState: LoginState = {
}

const loginModel = createModel<RootModel>()({
  state: initializeCommonState,
  effects: (dispatch) => ({
    async loginByName(payload: {
      user: PostApiUsersLoginRequestTypes,
      autoLogin: boolean
    }) {
      try {
        const { data } = await postApiUsersLogin(payload.user)

        dispatch.common.setToken(data.token)
        if (payload.autoLogin) {
          localStorage.setItem('access_token', data.token)
        }
        message.success('登录成功')
      } catch (error) {
        throw error
      }
    }
  }),
  reducers: {
  },
})

store.addModel({ name: 'login', ...loginModel })