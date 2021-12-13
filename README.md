## moyu-center

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