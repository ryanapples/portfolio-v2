import React from 'react';
import Bio from './Bio';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  text-align: center;
`;

const App = () => {
  return (
    <Container>
      <Bio />
    </Container>
  );
};

export default App;
