import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BackgroundSetter from './backgroundSetter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BackgroundSetter/>
    <App />
  </React.StrictMode>
);

