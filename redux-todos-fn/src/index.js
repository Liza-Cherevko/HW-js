import './index.css';

import App from '../src/components/App/App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { getTodos } from './store/actions/todo';
import store from './store';

store.dispatch(getTodos())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store}>
    <App />
  </Provider>
);


