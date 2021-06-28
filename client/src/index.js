import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
