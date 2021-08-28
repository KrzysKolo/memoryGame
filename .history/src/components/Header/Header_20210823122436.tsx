import React, { useState, useEffect } from 'react';
import { isStyledComponent } from 'styled-components';
import { ContainerHeader, DivHeader, ButtonHeader, LoginContainer } from './Header.styles';
//Components

//redux
import { useSelector, useDispatch } from 'react-redux';
import { StartStopGame, MatchedPairs, UpTurn } from './../../redux/gameSlice';

const Header = () => {


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
