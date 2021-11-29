import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";
import VitePluginImp from "vite-plugin-imp";
import ReactRefresh from "@vitejs/plugin-react-refresh";
import Inspect from 'vite-plugin-inspect'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    React(),
    ReactRefresh({
      // Exclude storybook stories and node_modules
      exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
      // Only .tsx files
      include: '**/*.tsx'
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
      { find: /^~/, replacement: '' },
      { find: 'config', replacement: resolve(__dirname, 'config') },
    ],
  },

  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      less: {
        // modifyVars: { 'primary-color': '#13c2c2' },
        javascriptEnabled: true,
      },
    },
  },
});
