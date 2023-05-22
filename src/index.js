import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id='app-container'>
      <App />
    </div>
  </React.StrictMode>
);

