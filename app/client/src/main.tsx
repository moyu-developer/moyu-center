import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import RouterViews from './router/RouterViews'
import store from 'src/model'
import './common/style/reset.css'

const token = localStorage.getItem('access_token')
store.dispatch.common.setToken(token || '')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterViews/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
