import React from 'react';
import Bio from './Bio';
import styled from 'styled-components';

const Container = styled.section`
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
