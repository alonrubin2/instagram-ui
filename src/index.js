import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import ReactBreakpoints from 'react-breakpoints';

// const breakpoints = {
//   mobile: 320,
//   mobileLandscape: 480,
//   tablet: 768,
//   tabletLandscape: 1024,
//   desktop: 1200,
//   desktopLarge: 1500,
//   desktopWide: 1920,
// }

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
