import React, { useState } from 'react';
import { isStyledComponent } from 'styled-components';
import { ContainerHeader, DivHeader, ButtonHeader } from './Header.styles';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from './../../redux/gameSlice';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleGame = () => {
    console.log("zaczynam grę");
    setIsOpen(prev => !prev);
    console.lof(isOpen)
    dispatch(startGame(isOpen));
  };

  return (
    <ContainerHeader>
      <h1>Disney - a memory game with React, Redux and Firebase</h1>
      <DivHeader>
        {isOpen
          ? (<ButtonHeader onClick={handleGame}>Stop!</ButtonHeader>)
          : (<ButtonHeader onClick={handleGame}>Play!</ButtonHeader>)
        }
        <div>
          <p>Turns: <span>1</span></p>
          <p>Pairs found: <span>0</span></p>
        </div>
      </DivHeader>
    </ContainerHeader>
  )
}

export default Header
