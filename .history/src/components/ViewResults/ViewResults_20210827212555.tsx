import React, { useEffect, useState } from 'react';
// Styles
import { ContainerResults } from './ViewResults.styles';
//Redux
import { useSelector } from 'react-redux';
import { setUserLogin } from './../../redux/userSlice';
//Firebase
import { firebase } from './../../auth/initFirebase';
// Chart
import { Bar, Line } from 'react-chartjs-2';

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
          <Bar
            data={{
              labels: game.turn,
              datasets: [
                {
                  label: '# of votes',
                  data: game.gameData,
                  backgroundColor: [
                    'rgba(255, 255, 255, 1)',
                  ]

                }
              ]
            }}
          />
        )
        )}
      </div>
      <Line
        options={{
          responsive: true
        }}
        data={gameResults}
      />


    </ContainerResults>
  )
}

export default ViewResults;

