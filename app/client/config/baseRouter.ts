import { createElement } from 'react'
import { SmileOutlined } from '@ant-design/icons';
import Namespace from '../src/pages/namespace'
import Layout from '../src/layouts'
import Project from '../src/pages/project'

import type { Router } from '@/router/RouterViews'

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
] as Router[]