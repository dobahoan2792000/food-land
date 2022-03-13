import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../src/assets/styles/tailwind.css';
import App from './App';
import store from 'app/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);