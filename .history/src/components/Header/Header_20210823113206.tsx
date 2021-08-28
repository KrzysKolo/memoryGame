import React, { useState, useEffect } from 'react';
import { isStyledComponent } from 'styled-components';
import { ContainerHeader, DivHeader, ButtonHeader, LogoContainer } from './Header.styles';
//Components

//redux
import { useSelector, useDispatch } from 'react-redux';
import { StartStopGame, MatchedPairs, UpTurn } from './../../redux/gameSlice';

const Header = () => {
  const dispatch = useDispatch();
  const _matchedPairs = useSelector(MatchedPairs);
  const _upTurn = useSelector(UpTurn);

  console.log(_matchedPairs.payload.game.matchedPairs)
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(prev => !prev);
    dispatch(StartStopGame(!isOpen));
    dispatch(UpTurn(_upTurn.payload.game.turn + 1))

  };
  const _isOpen = useSelector(StartStopGame);
  return (
    <ContainerHeader>
      <LogoContainer>
       <ButtonHeader>HOME</ButtonHeader>
       <ButtonHeader>YOUR RESULTS</ButtonHeader>
      </LogoContainer>

      <h1>Disney - a memory game with React, Redux and Firebase</h1>
     <DivHeader>
        {_isOpen.payload.game.isOpen
          ? (<ButtonHeader onClick={handleClick} >Stop!</ButtonHeader>)
          : (<ButtonHeader onClick={handleClick} >Play!</ButtonHeader>)
        }
        <div>
          <p>Turns: <span>{_upTurn.payload.game.turn}</span></p>
          <p>Pairs found: <span>{_matchedPairs.payload.game.matchedPairs}</span></p>
        </div>
      </DivHeader>
    </ContainerHeader>
  )
}

export default Header
