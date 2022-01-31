import React from 'react';
import styled from 'styled-components';
import { useReduceMotion } from 'react-reduce-motion';
import { useSpring, animated } from 'react-spring';

import headerLogo from '../images/ra-logo.svg';

const HeaderWrapper = styled(animated.nav)`
  position: fixed;
  top: 0;
  width: 100%;
`;

const ImageWrapper = styled.div`
  padding: 25px;
`;

const Image = styled.img`
  width: 40px;
  height: auto;
  max-width: 100%;

  @media only screen and (max-height: 575.98px) and (orientation: landscape) {
    width: 32px;
  }
`;

const Header = () => {
  const reduceMotion = useReduceMotion();
  const props = useSpring({
    config: { mass: 2, tension: 170 },
    opacity: 1,
    y: 0,
    from: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 10,
    },
    delay: reduceMotion ? 0 : 150,
  });

  return (
    <HeaderWrapper style={props}>
      <ImageWrapper>
        <Image src={headerLogo} alt="RA Logo" />
      </ImageWrapper>
    </HeaderWrapper>
  );
};

export default Header;
