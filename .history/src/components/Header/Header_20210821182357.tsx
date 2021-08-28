import React from 'react';
import { ContainerHeader, DivHeader } from './Header.styles';

const Header = () => {
  return (
    <ContainerHeader>
      <h1>Disney - a memory game with React, Redux and Firebase</h1>
      <DivHeader>
        <button>Start</button>
        <p>Turns: <span>1</span></p>
        <p>Pairs found: <span>0</span></p>
      </DivHeader>
    </ContainerHeader>
  )
}

export default Header
