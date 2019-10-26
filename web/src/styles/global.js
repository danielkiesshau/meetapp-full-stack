import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, button {
    color: #222,
    font-size: 14px;
    font-family: Helvetica, sans-serif, Arial;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;

  }

  ul {
    list-style: none;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  .Toastify__toast {
    flex-direction: row;
    align-items: center;
  }


`;
