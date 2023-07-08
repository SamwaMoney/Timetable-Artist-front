// reset css
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
  };
  body {
        padding: 0;
        margin: 0;
        font-family: 'Gothic A1', sans-serif;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
  };    
  ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
  };
  input {
        display: flex;
        outline: none;
        padding-left: 10px;
  };
  button {
    border: none;
    cursor: pointer;
  };
`;

export default GlobalStyles;
