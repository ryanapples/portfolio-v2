import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
`;

const NavContent = styled.div`
  padding: 15px 20px;
`;

const Header = () => {
  return (
    <Nav>
      <NavContent>Header</NavContent>
    </Nav>
  );
};

export default Header;
