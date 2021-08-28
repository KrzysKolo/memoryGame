import React, { useState, useEffect } from 'react';
import { isStyledComponent } from 'styled-components';
import { ContainerHeader, ButtonHeader, LoginContainer } from './Header.styles';
//Components
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { StartStopGame, MatchedPairs, UpTurn } from './../../redux/gameSlice';
//ROUTING
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';

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
