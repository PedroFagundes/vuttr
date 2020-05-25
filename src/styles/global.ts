import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #FCFCFD;
    color: #170C3A;
    -webkit-font-smoothing: antialiased;

    height: 100vh;
  }

  body, input, button {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
  }

  h1, h2, h3, h4, h5, strong {
    font-weight: 600;
  }

  h1 {
    font-size: 42px;
  }

  h2 {
    font-size: 36px;
  }

  h3 {
    font-size: 30px;
  }

  h4 {
    font-size: 26px;
  }

  h5 {
    font-size: 24px;
  }

  small {
    font-size: 18px;
  }

  button {
    cursor: pointer;
  }
`;
