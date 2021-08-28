import React, { useState, useEffect } from 'react';
import { isStyledComponent } from 'styled-components';
import { ContainerHeader, DivHeader, ButtonHeader } from './Header.styles';
//Components

//redux
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from './../../redux/gameSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(prev => !prev);
    dispatch(startGame(prev => !prev));
}
  return (
    <ContainerHeader>
      <h1>Disney - a memory game with React, Redux and Firebase</h1>
     <DivHeader>
        {isOpen
          ? (<ButtonHeader onClick={handleClick} >Stop!</ButtonHeader>)
          : (<ButtonHeader onClick={handleClick} >Play!</ButtonHeader>)
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
