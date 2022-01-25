import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: #005c97; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #363795,
      #005c97
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #363795,
      #005c97
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1350px;
    min-height: 100vh;
    @media (max-width: 768px) {
      
    }
    @media (max-width: 480px) {
      max-width: 100%;
    }
  }
`;

export default GlobalStyle;
