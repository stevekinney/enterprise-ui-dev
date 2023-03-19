import React from 'react';
import ReactDOM from 'react-dom/client';
import Application from './application';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
);
