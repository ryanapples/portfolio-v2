import React from 'react';

// Styles
import styled from 'styled-components';
import { GlobalStyle } from '../styles/index';

// Components
import { Header, Bio, Social } from './index';

const Container = styled.main`
  margin: 0px auto;
  width: 100%;
  max-width: 1400px;
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
