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
//Auth
import { firebase } from "./../../auth/initFirebase";
import  FirebaseAuth from "./../../auth/firebaseAuth";
import { useAuth } from "./../../auth/authProvider";

const Header = () => {

  const { user, loading, logout } = useAuth();

  if (loading) return null;
  if (!user) return <FirebaseAuth className="pages"/>;


  return (
    <ContainerHeader>
      <LoginContainer>
        <div>
          <NavLink to={'/home'} exact className="navLink"><ButtonHeader>HOME</ButtonHeader></NavLink>
          <NavLink to={'/your-results'} className="navLink" ><ButtonHeader>YOUR RESULTS</ButtonHeader></NavLink>
        </div>
        <div>
          <NavLink to={'/'} className="navLink" ><ButtonHeader onClick={logout}>LOGOUT</ButtonHeader></NavLink>
        </div>
      </LoginContainer>
    </ContainerHeader>
  )
}

export default Header;
