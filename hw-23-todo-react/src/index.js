import './common-css/css/normalize.css';
import './common-css/css/skeleton.css';
import './common-css/css/dark-theme.css';
import './index.css';

import App from './Components/App/App';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


