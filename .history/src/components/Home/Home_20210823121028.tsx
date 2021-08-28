import * as React from 'react';
import { ContainerHome } from './Home.styles';
//Components
import { Card, Header } from './components';
// Setup
import { createBoard } from './setup';
import { shuffleArray } from './utils';
// Types
import { CardType } from './setup';
// Styles
import { Grid, Wrapper, Container } from './App.styles';
//Sound
import useSound from 'use-sound';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { StartStopGame, MatchedPairs, UpTurn } from './redux/gameSlice';

const Home = () => {
  return (
    <ContainerHome>
       <h1>Home</h1>
    </ContainerHome>
  )
}

export default Home
