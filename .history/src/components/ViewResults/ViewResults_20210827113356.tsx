import React, { useEffect, useState } from 'react';
// Styles
import { ContainerResults } from './ViewResults.styles';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { setUserLogin } from './../../redux/userSlice';
//Firebase
import { firebase } from './../../auth/initFirebase';
import { getEffectiveConstraintOfTypeParameter } from 'typescript';

const db = firebase.database();

interface IGameProps {
  turn: number,
  data: number,
  uid: string,
};

const ViewResults = () => {
  const [gameResults, setGameResults] = useState<Record<string, IGameProps>>({});
  const _user = useSelector(setUserLogin);
  useEffect(() => {
    const userGameRef = db.ref(`userGame/${_user.payload.user.user.uid}`);
    const refs = [userGameRef];

    userGameRef.on("child_added", (child) => {
      const key: string = child.key as string;
      const gameRef = db.ref(`game/${key}`);
      refs.push(gameRef);
      gameRef.on("value", (snap) => {

        setGameResults((old) => {
          return {...old, [key]: snap.val()}
        })
      })
    });

    return () => {
      refs.forEach(ref => ref.off());
    }


  });

  return (
    <ContainerResults>
      <h1>Your results: {_user.payload.user.user.email}</h1>
      <ul>
        <li>
          <pre>
            {Object.entries(gameResults).map((game) => <li key={game.uid}>
              <h3>{game.turn}</h3>
            </li>)}
          </pre>
        </li>
      </ul>
    </ContainerResults>
  )
}

export default ViewResults;

