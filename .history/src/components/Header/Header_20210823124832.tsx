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
          <NavLink to={'/'} className="navLink"><ButtonHeader>HOME</ButtonHeader></NavLink>
          <NavLink to={'/your-results'} className="navLink" ><ButtonHeader>YOUR RESULTS</ButtonHeader></NavLink>
        </div>
        <NavLink to={'/login'} className="navLink" ><ButtonHeader>LOGOUT</ButtonHeader></NavLink>
      </LoginContainer>
    </ContainerHeader>
  )
}

export default Header;
