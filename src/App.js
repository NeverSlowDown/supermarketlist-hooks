import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background: blue;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const App = () => (
  <Container className="App">
    hola
  </Container>
);

export default App;
