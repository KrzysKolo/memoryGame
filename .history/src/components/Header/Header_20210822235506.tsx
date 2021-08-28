import React, { useState, useEffect } from 'react';
import { isStyledComponent } from 'styled-components';
import { ContainerHeader, DivHeader, ButtonHeader } from './Header.styles';
//Components

//redux
import { useSelector, useDispatch } from 'react-redux';
import { StartStopGame, MatchedPairs } from './../../redux/gameSlice';

const Header = () => {
  const dispatch = useDispatch();
  const _matchedPairs = useSelector(MatchedPairs);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(prev => !prev);
    dispatch(StartStopGame(!isOpen));
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
          <p>Pairs found: <span>{_matchedPairs}</span></p>
        </div>
      </DivHeader>
    </ContainerHeader>
  )
}

export default Header
