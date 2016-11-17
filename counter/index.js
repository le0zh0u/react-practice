import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './public/containers/App'
import configureStore from './public/store/configureStore'

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
