import React from 'react';

// Styles
import styled from 'styled-components';
import { GlobalStyle } from '../styles/index';

// Components
import Bio from './Bio';
import Header from './Header';
import Social from './Social';

const Container = styled.main`
  margin: 0px auto;
  width: 100%;
  max-width: 1350px;
  min-height: 100vh;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Bio />
      </Container>
      <Social />
    </>
  );
};

export default App;
