import { css } from 'styled-components';

// Roboto
import RobotoRegularTtf from '../fonts/Roboto/Roboto-Regular.ttf';
import RobotoMediumTtf from '../fonts/Roboto/Roboto-Medium.ttf';
import RobotoBold from '../fonts/Roboto/Roboto-Bold.ttf';

// IBM Plex Mono
import IBMPlexMonoRegular from '../fonts/IBM_Plex_Mono/IBMPlexMono-Regular.ttf';
import IBMPlexMonoMedium from '../fonts/IBM_Plex_Mono/IBMPlexMono-Medium.ttf';
import IBMPlexMonoSemibold from '../fonts/IBM_Plex_Mono/IBMPlexMono-SemiBold.ttf';
import IBMPlexMonoItalic from '../fonts/IBM_Plex_Mono/IBMPlexMono-Italic.ttf';
import IBMPlexMonoMediumItalic from '../fonts/IBM_Plex_Mono/IBMPlexMono-MediumItalic.ttf';
import IBMPlexMonoSemiBoldItalic from '../fonts/IBM_Plex_Mono/IBMPlexMono-SemiBoldItalic.ttf';

const robotoWeights = {
  400: [RobotoRegularTtf],
  500: [RobotoMediumTtf],
  700: [RobotoBold],
};

const IBMPlexMonoWeights = {
  400: [IBMPlexMonoRegular],
  500: [IBMPlexMonoMedium],
  600: [IBMPlexMonoSemibold],
};

const IBMPlexMonoItalicWeights = {
  400: [IBMPlexMonoItalic],
  500: [IBMPlexMonoMediumItalic],
  600: [IBMPlexMonoSemiBoldItalic],
};

const roboto = {
  name: 'Roboto',
  normal: robotoWeights,
};

const IBMPlexMono = {
  name: 'IBM Plex Mono',
  normal: IBMPlexMonoWeights,
  italic: IBMPlexMonoItalicWeights,
};

const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: url(${woff2}) format('woff2'),
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: auto;
      }
    `;
  }

  return styles;
};

const robotoFonts = createFontFaces(roboto);
const IBMPlexMonoFonts = createFontFaces(IBMPlexMono);
const IBMPlexMonoItalicFonts = createFontFaces(IBMPlexMono, 'italic');

const Fonts = css`
  ${robotoFonts + IBMPlexMonoFonts + IBMPlexMonoItalicFonts};
`;

export default Fonts;
