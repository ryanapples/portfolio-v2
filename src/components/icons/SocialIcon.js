import React from 'react';
import propTypes from 'prop-types';

import { LinkedIn, Github, Instagram } from './index';

const SocialIcon = ({ name }) => {
  switch (name) {
    case 'LinkedIn':
      return <LinkedIn />;
    case 'Github':
      return <Github />;
    case 'Instagram':
      return <Instagram />;
    default:
      return null;
  }
};

SocialIcon.propTypes = {
  name: propTypes.string,
};

export default SocialIcon;
