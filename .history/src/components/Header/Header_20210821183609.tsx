import React from 'react';
import { ContainerHeader, DivHeader, ButtonHeader } from './Header.styles';

const Header = () => {
  return (
    <ContainerHeader>
      <h1>Disney - a memory game with React, Redux and Firebase</h1>
      <DivHeader>
        <ButtonHeader>Play!</ButtonHeader>
        <div>
          <p>Turns: <span>1</span></p>
          <p>Pairs found: <span>0</span></p>
        </div>
      </DivHeader>
    </ContainerHeader>
  )
}

export default Header
