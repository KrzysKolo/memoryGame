import React from 'react';
// Styles
import { ContainerResults } from './ViewResults.styles';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { StartStopGame, MatchedPairs, UpTurn } from './../../redux/gameSlice';
import { setUserLogin } from './../../redux/userSlice';

const ViewResults = () => {

  const _user = useSelector(setUserLogin);
  return (
    <ContainerResults>
      <h1>Your results: {_user.payload.user.user.email}</h1>
      asasasas
    </ContainerResults>
  )
}

export default ViewResults;

