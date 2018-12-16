import React from 'react';
import styled from 'styled-components';
import List from './components/list';

const MainContainer = styled.main`
  display: flex;
  background: #f5f5f5;
  padding-top: 50px;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
`;

const App = () => (
  <MainContainer className="App">
    <List />
  </MainContainer>
);

export default App;
