// can use imports as react has webpack built in
import React from 'react'
import ReactDOM from 'react-dom' // used for browsers
import { Provider } from 'react-redux'

import { store } from './store'
import './index.css'
import 'tachyons'
import * as serviceWorker from './serviceWorker'
import App from './containers/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
