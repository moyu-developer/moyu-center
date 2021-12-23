import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";
import VitePluginImp from "vite-plugin-imp";
import ReactRefresh from "@vitejs/plugin-react-refresh";
import lessToJS from "less-vars-to-js";
import Inspect from "vite-plugin-inspect";
import { resolve } from "path";
import fs from "fs";

const themeVariables = lessToJS(
  fs.readFileSync(resolve(__dirname, './src/common/style/theme.less'), "utf8")
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    React(),
    ReactRefresh({
      // Exclude storybook stories and node_modules
      exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
      // Only .tsx files
      include: "**/*.tsx",
    }),
    Inspect(),
    VitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],

  resolve: {
    alias: [
      // fix less import by: @import ~
      { find: /^~/, replacement: "" },
      { find: "config", replacement: resolve(__dirname, "config") },
      { find: "src", replacement: resolve(__dirname, "./src") },
    ],
  },

  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
    preprocessorOptions: {
      less: {
        modifyVars: themeVariables,
        javascriptEnabled: true,
      },
    },
  },
});
