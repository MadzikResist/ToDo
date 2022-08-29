import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
    *{
box-sizing: border-box;
    }
  body {
      overflow-x: hidden;
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
