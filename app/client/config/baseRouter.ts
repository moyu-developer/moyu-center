import { createElement } from 'react'
import { SmileOutlined } from '@ant-design/icons';
import Namespace from '../src/pages/namespace'
import Layout from '../src/layouts'
import Project from '../src/pages/project'
import Login from '../src/pages/login'
import NoFound from '../src/pages/no-found'

import type { Router } from 'src/router/RouterViews'

export default [
  {
    path: '/',
    name: '首页',
    meta: {},
    icon: createElement(SmileOutlined),
    component: createElement(Layout),
    routes: [
      {
        path: '/project',
        name: '项目管理',
        auth: [0, 1],
        meta: {},
        component: createElement(Project),
        icon: createElement(SmileOutlined),
      },
      {
        path: '/namespace',
        name: '空间',
        meta: {},
        component: createElement(Namespace),
        icon: createElement(SmileOutlined),
      },
    ],
  },
  {
    path: '/login',
    meta: {},
    component: createElement(Login),
  },
  {
    path: '*',
    component: createElement(NoFound)
  }
] as Router[]