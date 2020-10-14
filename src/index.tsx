import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import shares from './shares';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={shares}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
