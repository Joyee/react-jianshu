import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import { GlobaleStyle } from './style.js'
import IconfontStyle from './statics/iconfont/iconfont'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobaleStyle />
      <IconfontStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
