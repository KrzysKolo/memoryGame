import { useState, useEffect } from 'react';
import * as React from "react";
//CSS
import './index.css';
//Components
import { Header, Home, Login, ViewResults, } from './components';

// Styles
import { Wrapper, Container } from './App.styles';

const App: React.FC = () => {

  return (
    <Wrapper>
      <Container>
        <Header />

        </Container>
    </Wrapper>
  );
};

export default App;