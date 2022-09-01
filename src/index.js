import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
    *{
      box-sizing: border-box;
      scrollbar-width: auto;
      scrollbar-color: #ab815a #ffffff;
      padding : 0;
      margin: 0;
    }
    *::-webkit-scrollbar {
      width: 14px;
    }
    *::-webkit-scrollbar-track {
      background: transparent;
    }
    *::-webkit-scrollbar-thumb {
      background-color: #ab815a;
      border-radius: 15px;
      border: none;
    }
  body {
      overflow-x: hidden;
      overflow-y: hidden;
      font-family: 'Mali', cursive;
    }
    
`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
