import React, { useEffect } from 'react';
// Styles
import { ContainerResults } from './ViewResults.styles';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { setUserLogin } from './../../redux/userSlice';
//Firebase
import { firebase } from './../../auth/initFirebase';
import { getEffectiveConstraintOfTypeParameter } from 'typescript';

const db = firebase.database();

const ViewResults = () => {

  const _user = useSelector(setUserLogin);
  useEffect(() => {
    const userGameRef = db.ref(`userGame/${_user.payload.user.user.uid}`);
    const refs = [userGameRef];

    userGameRef.on("child_added", (child) => {
      const key: string = child.key as string;
      const gameRef = db.ref(`game/${key}`);
      refs.push(gameRef);
      gameRef.on("value", (snap) => {
        console.log(snap.val());
      })
    });

    return () => {
      refs.forEach(ref => ref.off());
    }
  });

  return (
    <ContainerResults>
      <h1>Your results: {_user.payload.user.user.email}</h1>
      asasasas
    </ContainerResults>
  )
}

export default ViewResults;

