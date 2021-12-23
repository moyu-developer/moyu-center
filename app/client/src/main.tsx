import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "src/model";
import RouterViews from "./router/RouterViews";
import "./common/style/reset.less";

const token = localStorage.getItem("access_token");
store.dispatch.common.setToken(token || "");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterViews />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
