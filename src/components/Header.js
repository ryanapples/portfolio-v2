import React from 'react';
import styled from 'styled-components';

import logo from '../assets/ra-logo.svg';

const HeaderWrapper = styled.nav`
  position: fixed;
  top: 0;
`;

const ImageWrapper = styled.div`
  padding: 20px;
`;

const Image = styled.img`
  width: 40px;
  max-width: 100%;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <ImageWrapper>
        <Image src={logo} alt="RA Logo" />
      </ImageWrapper>
    </HeaderWrapper>
  );
};

export default Header;
