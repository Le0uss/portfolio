
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Page/App.js'; 
import reportWebVitals from './reportWebVitals.js';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

reportWebVitals();
