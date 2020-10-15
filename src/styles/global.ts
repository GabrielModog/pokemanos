import { createGlobalStyle } from 'styled-components';

import { Danger } from './palette';

const GlobalStyle = createGlobalStyle`
  html, body, *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${Danger[0]};
    color: ${Danger[0]};
  }

  body, input, button, select, option, label {
    font-family: 'Rubik', sans-serif;
  }
`;

export default GlobalStyle;
