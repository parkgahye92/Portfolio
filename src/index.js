import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes"; //-> Routes 컴포넌트 연결

import reportWebVitals from './reportWebVitals';// react 성능을 측정하는 용도

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Routes />, document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
