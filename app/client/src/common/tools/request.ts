import { createElement } from "react";
import type { AxiosRequestConfig } from "@moyu/request";
import GotAxios from "@moyu/request";
import { notification, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import store from "src/model";

const defaultMessage = "请耐心等候，系统重启中......";

const isRequestSuccess = (status: number) =>
  /^(2|3)\d{2}$/.test(String(status));

/**
 * 清除当前用户身份信息，并且跳转到登录页面
 */
function clearUserTraces() {
  Modal.confirm({
    title: "提示信息",
    icon: createElement(ExclamationCircleOutlined),
    content: "您当前设备信息已过期，可以取消继续留在该页面，或者重新登录。",
    onOk: () => {
      console.log("执行");
      // localStorage.removeItem('access_token')
      const { navigate } = store.getState().common;
      if (navigate) {
        navigate("/login", {
          replace: true,
        });
      }
    },
  });
}

const request = new GotAxios(
  {
    baseURL:
      typeof import.meta.env.VITE_REQUEST_URL === "string"
        ? import.meta.env.VITE_REQUEST_URL
        : "",
  },
  {
    request(config: AxiosRequestConfig) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${store.getState().common.token}`;
      return config;
    },
    response(res) {
      console.log(res);
      const { status = 500, data } = res;
      if (isRequestSuccess(status) && isRequestSuccess(data.code)) {
        return Promise.resolve(data);
      }
      throw res;
    },
    handleError(error: any) {
      console.log(error, "error");
      const { status, data } = error;

      const errorCode = status === 200 ? data.code : status;

      switch (errorCode) {
        /** @case 401，清空access_token, 并跳转到登录页面  */
        case 401:
          clearUserTraces();
          break;

        default:
          /** 控制台输出 */
          console.error(
            new Error(`请求发生错误 --> ${JSON.stringify(error, null, 2)}`)
          );
          break;
      }

      /** 暴露给用户，兜底 */
      notification.error({
        message: "请求发生错误",
        description: data ? data.message : defaultMessage,
      });
    },
  }
).getRequestInstance();

if (!request) {
  throw new Error("@moyu/request create requestAPI is not found。");
}

export default request;
