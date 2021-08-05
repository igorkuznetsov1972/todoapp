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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
