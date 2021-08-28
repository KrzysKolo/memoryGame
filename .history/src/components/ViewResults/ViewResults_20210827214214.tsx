import React, { useEffect, useState } from 'react';
// Styles
import { ContainerResults } from './ViewResults.styles';
//Redux
import { useSelector } from 'react-redux';
import { setUserLogin } from './../../redux/userSlice';
//Firebase
import { firebase } from './../../auth/initFirebase';
// Chart
import { Line } from 'react-chartjs-2';

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
          <Line
            data={{
              labels: game.turn,
              datasets: [{
                label: 'Dataset of Months',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                          data: game.gameData,
              }

              ]
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
            }}
          />
        )
        )}
      </div>
    </ContainerResults>
  )
}

export default ViewResults;

