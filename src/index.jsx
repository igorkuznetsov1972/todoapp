import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import throttle from 'lodash/throttle';
import App from './App';
import store from './store/store';
import { saveState } from './localStorage';
// import reportWebVitals from './reportWebVitals';

store.subscribe(throttle(() => {
  saveState({
    tasks: store.getState().tasks,
  });
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
