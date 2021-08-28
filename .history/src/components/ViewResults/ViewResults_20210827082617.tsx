import React from 'react';
import { ContainerResults } from './ViewResults.styles';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { StartStopGame, MatchedPairs, UpTurn } from './../../redux/gameSlice';
import { setUserLogin } from './../../redux/userSlice';

const ViewResults = () => {
  return (
    <ContainerResults>
      <h1>Your results</h1>
      asasasas
    </ContainerResults>
  )
}

export default ViewResults;

