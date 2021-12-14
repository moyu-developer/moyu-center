## 项目组织

整个项目是通过monorepo来管理一些应用的，先说下包的作用

- `@moyu/client`：客户端，通过React + Vite 做为核心构建的产物，足够快，相对好。

- `@moyu/server`: 服务端，通过Nestjs + MongoDB 为基础的Node服务。

- `@moyu/request`: Axios接口请求，兼容多端的Http请求库，用于服务端请求开放接口，客户端请求数据。

- `@moyu/shared`：公共的，适用于所有项目的，用于抽象成工具方法和全团队代码组织。


## 命令行

```shell
# 安装所有依赖
pnpm install 

# 客户端 hrm watch 启动，适用于开发
pnpm run dev:client [options]

# 服务端 hrm watch 启动，适用于开发
pnpm run dev:server [options]

# 客户端构建
pnpm run build:client [options]

# 服务端构建
pnpm run build:server [options]
```

## 规范配置

为什么会有规范配置？

保证项目代码大致一体化的统一。多人协作下如果代码的格式非常糟糕，从整体的开发体验上是不舒服的，因此在这里做了一些限制和简单格式化。
原则上是处理基本编码风格，不约束js相关的语法，但还是建议做一些开发者规范约束沟通和定期的代码review。

做了哪些东西

- eslint rules
- vscode editor rules
- pre-commit rules 

### .vscode/setting.json
```json
{
  "editor.detectIndentation": false,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "eslint.autoFixOnSave": true
  },
  "eslint.format.enable": true,
  "eslint.validate": ["javascript", "typescript"],
  "diffEditor.ignoreTrimWhitespace": true,
  "editor.formatOnType": true,
  "files.autoSave": "onFocusChange",
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.suggest.snippetsPreventQuickSuggestions": false,
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}

```
