import React, { useState, useEffect } from 'react';
import { isStyledComponent } from 'styled-components';
import { ContainerHeader, DivHeader, ButtonHeader, LoginContainer } from './Header.styles';
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
      <LoginContainer>
        <div>
          <ButtonHeader>HOME</ButtonHeader>
          <ButtonHeader>YOUR RESULTS</ButtonHeader>
        </div>
       <ButtonHeader>LOGOUT</ButtonHeader>
      </LoginContainer>
    </ContainerHeader>
  )
}

export default Header
