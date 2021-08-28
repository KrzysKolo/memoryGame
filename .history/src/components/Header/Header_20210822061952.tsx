import React, { useState } from 'react';
import { isStyledComponent } from 'styled-components';
import { ContainerHeader, DivHeader, ButtonHeader } from './Header.styles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleGame = () => {
    console.log("zaczynam grę");
    isStyledComponent(true);
  };

  return (
    <ContainerHeader>
      <h1>Disney - a memory game with React, Redux and Firebase</h1>
      <DivHeader>
        <ButtonHeader onClick={handleGame}>Play!</ButtonHeader>
        <div>
          <p>Turns: <span>1</span></p>
          <p>Pairs found: <span>0</span></p>
        </div>
      </DivHeader>
    </ContainerHeader>
  )
}

export default Header
