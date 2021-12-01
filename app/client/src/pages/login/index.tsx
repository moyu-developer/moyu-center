import {
  LoginForm,
  ProFormText,
  ProFormCaptcha,
  ProFormCheckbox,
} from "@ant-design/pro-form";
import { UserOutlined, MobileOutlined, LockOutlined } from "@ant-design/icons";
import { message, Row, Tabs, Col, Button } from "antd";
import { useState } from "react";
import Banner from "./Banner";
import logo from "src/icons/logo.svg";
import styles from "./index.module.less";

type LoginType = "register" | "account";

export default () => {
  const [loginType, setLoginType] = useState<LoginType>("account");
  return (
    <div className={styles.loginWrapper}>
      <Row align="middle" justify="center">
        <Col sm={24} xl={8}>
          <Banner />
        </Col>
        <Col sm={14} xl={16}>
          <div className={styles.loginFormContainer}>
            <LoginForm
              logo={logo}
              title="Moyu Center"
              subTitle="一个好看有趣的接口管理中心平台！"
              actions={
                <Button type="text" block>
                  注册账号
                </Button>
              }
            >
              <Tabs
                activeKey={loginType}
                onChange={(activeKey) => setLoginType(activeKey as LoginType)}
              >
                <Tabs.TabPane key={"account"} tab={"快速登录"} />
                <Tabs.TabPane key={"register"} disabled tab={"注册账户"} />
              </Tabs>
              {loginType === "account" && (
                <>
                  <ProFormText
                    name="username"
                    fieldProps={{
                      size: "large",
                      prefix: <UserOutlined className={"prefixIcon"} />,
                    }}
                    placeholder={"请输入Gitlab账号!"}
                    rules={[
                      {
                        required: true,
                        message: "请输入Gitlab账号!",
                      },
                    ]}
                  />
                  <ProFormText.Password
                    name="password"
                    fieldProps={{
                      size: "large",
                      prefix: <LockOutlined className={"prefixIcon"} />,
                    }}
                    placeholder={"请输入Gitlab密码!"}
                    rules={[
                      {
                        required: true,
                        message: "请输入Gitlab密码!",
                      },
                    ]}
                  />
                </>
              )}
              {loginType === "register" && (
                <>
                  <ProFormText
                    fieldProps={{
                      size: "large",
                      prefix: <MobileOutlined className={"prefixIcon"} />,
                    }}
                    name="mobile"
                    placeholder={"手机号"}
                    rules={[
                      {
                        required: true,
                        message: "请输入手机号！",
                      },
                      {
                        pattern: /^1\d{10}$/,
                        message: "手机号格式错误！",
                      },
                    ]}
                  />
                  <ProFormCaptcha
                    fieldProps={{
                      size: "large",
                      prefix: <LockOutlined className={"prefixIcon"} />,
                    }}
                    captchaProps={{
                      size: "large",
                    }}
                    placeholder={"请输入验证码"}
                    captchaTextRender={(timing, count) => {
                      if (timing) {
                        return `${count} ${"获取验证码"}`;
                      }
                      return "获取验证码";
                    }}
                    name="captcha"
                    rules={[
                      {
                        required: true,
                        message: "请输入验证码！",
                      },
                    ]}
                    onGetCaptcha={async () => {
                      message.success("获取验证码成功！验证码为：1234");
                    }}
                  />
                </>
              )}
              <div
                style={{
                  marginBottom: 24,
                }}
              >
                <ProFormCheckbox noStyle name="autoLogin">
                  记住当前
                </ProFormCheckbox>
                <a
                  style={{
                    float: "right",
                  }}
                >
                  忘记密码
                </a>
              </div>
            </LoginForm>
          </div>
        </Col>
      </Row>
    </div>
  );
};
