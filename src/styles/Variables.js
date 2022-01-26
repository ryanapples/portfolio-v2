import { css } from 'styled-components';

const Variables = css`
  :root {
    --font-sans: 'Roboto', -apple-system, system-ui, sans-serif;
    --font-mono: 'IBM Plex Mono', 'Roboto Mono', monospace;
    --font-w-regular: 400;
    --font-w-semibold: 600;
    --font-w-bold: 700;

    --white: #faf9f6;

    --background-fallback: #005c97; /* fallback for old browsers */
    --background-webkit: -webkit-linear-gradient(
      to right,
      #363795,
      #005c97
    ); /* Chrome 10-25, Safari 5.1-6 */
    --background: linear-gradient(
      to right,
      #363795,
      #005c97
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;

export default Variables;
