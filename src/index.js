import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Global, css } from '@emotion/core';

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        /* Use better layout model (border-box) */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body {
          font-family: sans-serif;

          nav {
            font-size: 13px;
          }
          h1 {
            color: #262626;
            font-size: 36px;
            margin: 0px 0px;
          }

          h2 {
            color: #3e5469;
            font-size: 24px;
          }
          h4 {
            color: #272727;
            font-size: 18px;
          }
          p {
            color: #9896a4;
            margin: 10px;
            line-height: 25px;
            font-size: 18px;
            font-weight: lighter;
          }
          a {
            color: #009cbd;
          }
          input {
            background: rgba(214, 216, 216, 0.64);
            color: #9b9b9b;
            border-radius: 6px;
            border: #ffffff;
            padding: 10px 20px;
            margin-right: 10px;
          }
          button {
            background: #009cbd;
            color: #ffffff;
            border-radius: 6px;
            border: #ffffff;
            padding: 10px 20px;
            margin-right: 20px;
            margin-top: 20px;
          }
          h1 {
          }
          p {
          }
        }
      `}
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
