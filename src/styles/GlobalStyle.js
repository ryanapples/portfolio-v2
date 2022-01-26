import { createGlobalStyle } from 'styled-components';
import fonts from './Fonts';
import variables from './Variables';

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};

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
    background: var(--background-fallback);
    background: var(--background-webkit);
    background: var(--background);
    color: var(--white);
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
