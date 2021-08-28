import React, { useEffect, useState } from 'react';
// Styles
import { ContainerResults } from './ViewResults.styles';
//Redux
import { useSelector } from 'react-redux';
import { setUserLogin } from './../../redux/userSlice';
//Firebase
import { firebase } from './../../auth/initFirebase';
// Chart
import { Bar } from 'react-chartjs-2';

const db = firebase.database();


interface IGameProps {
  turn: number,
  gameData: number,
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
        console.log(snap.val());
        setGameResults((old) => {
          return {...old, [key]: snap.val()}
        })
      })
    });

    return () => {
      refs.forEach(ref => ref.off());
    }
  }, []);
console.log(gameResults.gameData)
  return (
    <ContainerResults>
      <h1>Your results: {_user.payload.user.user.email}</h1>
      <div>
        {Object.entries(gameResults).map(([id, game]) => (
          <p key={id}>
            <h4>{game.turn}</h4>
            <h5>{game.gameData}</h5>
          </p>
        )
        )}
      </div>
      <Bar
        data={{
          labels: gameResults.turn,
        }}
        height={400}
        width={600}
      />

    </ContainerResults>
  )
}

export default ViewResults;

