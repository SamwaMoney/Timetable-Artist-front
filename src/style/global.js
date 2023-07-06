// reset css
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
  };
  body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    };
  input{
        display: flex;
        outline: none;
        padding-left: 10px;
    };
  button {
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyles;
