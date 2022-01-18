import React from 'react';
import Bio from './Bio';
import styled from 'styled-components';

const Container = styled.div`
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
