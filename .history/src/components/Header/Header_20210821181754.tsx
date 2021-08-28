import React from 'react';
import { ContainerHeader } from './Header.styles';

const Header = () => {
  return (
    <ContainerHeader>
      <h1>Disney - a memory game with React, Redux and Firebase</h1>
      <div>
        <button>Start</button>
      </div>
    </ContainerHeader>
  )
}

export default Header
