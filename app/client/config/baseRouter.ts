import { createElement, lazy } from 'react'
import { SmileOutlined } from '@ant-design/icons';
import Layout from '../src/layouts'

import type { Router } from 'src/router/RouterViews'

export default [
  {
    path: '/',
    name: '首页',
    icon: createElement(SmileOutlined),
    component: createElement(Layout),
    routes: [
      {
        path: '/project',
        name: '项目管理',
        meta: {
          auth: [0, 1],
        },
        component: createElement(lazy(() => import('../src/pages/project'))),
        icon: createElement(SmileOutlined),
        
      },
      {
        path: '/namespace',
        name: '空间',
        component: createElement(lazy(() => import('../src/pages/namespace'))),
        icon: createElement(SmileOutlined),
        
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