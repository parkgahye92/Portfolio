import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom' //react router
import App from './App';
import reportWebVitals from './reportWebVitals';// react 성능을 측정하는 용도

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
