<p align="center">
  <a href="https://github.com/orgs/moyu-developer/dashboard">
    <img width="200" src="./app/client/src/icons/logo.svg">
  </a>
</p>

<h1 align="center">Moyu Center</h1>

<div align="center">

🦑一个好看有趣的接口管理中心平台。

</div>

## eslint 配置
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
