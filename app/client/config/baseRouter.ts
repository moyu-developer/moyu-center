import { createElement, lazy } from 'react'
import { SmileOutlined, FundOutlined, ClusterOutlined, CodepenOutlined } from '@ant-design/icons';
import Layout from 'src/layouts'

import type { Router } from 'src/router/RouterViews'

/**
 * @FIXME 2021年12月11日
 * component组件使用非tsx文件名称，因此babel不会将其视为`React Component`，自然不会将其编译为`_jsx.createComponent`
 * 因此在这里使用createElement主动创建组件。当然，你也可以将文件名改成baseRouter.tsx。
 */

export default [
  {
    path: '/',
    name: '首页',
    icon: createElement(SmileOutlined),
    component: createElement(Layout),
    routes: [
      {
        path: '/',
        name: '首页',
        index: true,
        component: createElement(lazy(() => import('src/pages/dashboard'))),
        icon: createElement(FundOutlined),
      },
      {
        path: '/project',
        name: '项目管理',
        meta: {
          auth: [0, 1],
        },
        component: createElement(lazy(() => import('../src/pages/project'))),
        icon: createElement(ClusterOutlined),
        
      },
      {
        path: '/namespace',
        name: '空间',
        component: createElement(lazy(() => import('../src/pages/namespace'))),
        icon: createElement(CodepenOutlined),
        
      },
    ],
  },
  {
    path: '/login',
    component: createElement(lazy(() => import('../src/pages/login')))
  },
  {
    path: '*',
    component: createElement(lazy(() => import('../src/pages/no-found')))
  }
] as Router[]