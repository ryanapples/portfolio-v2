import React from 'react';

import './App.css';
import styled from 'styled-components';

import Bio from './Bio';
import Header from './Header';
import Social from './Social';

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
  width: 100%;
  height: 100vh;
`;

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Bio />
      </Container>
      <Social />
    </div>
  );
};

export default App;
