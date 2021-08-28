import React, { useEffect, useState } from 'react';
// Styles
import { ContainerResults } from './ViewResults.styles';
//Components
import { BarChart } from './../'
//Redux
import { useSelector } from 'react-redux';
import { setUserLogin } from './../../redux/userSlice';
//Firebase
import { firebase } from './../../auth/initFirebase';
// Chart
import { Line } from 'react-chartjs-2';


const db = firebase.database();


interface IGameProps {
  turn: Array<number | null | any>,
  label: [],
};

export interface Game {
  arrTurn: Array<number | null | any>;
  arrLabel: Array<string | null | any>;

}

const ViewResults = () => {

  const [gameResults, setGameResults] = useState<Record<string, IGameProps>>({});
  const [turn, setTurn] = useState<Array <number | null | any>>([])
  const [label, setLabel] = useState<Array<string | null | any>>([])
  const _user = useSelector(setUserLogin);
  let arrTurn = [0]
  let arrLabel = [""]

  useEffect(() => {
    const userGameRef = db.ref(`userGame/${_user.payload.user.user.uid}`);
    const refs = [userGameRef];

    userGameRef.on("child_added", (child) => {
      const key: string = child.key as string;
      const gameRef = db.ref(`game/${key}`);
      refs.push(gameRef);
      gameRef.on("value", (snap) => {
        console.log(snap.val().turn);
        arrTurn.push(snap.val().turn)
        arrLabel.push(snap.val().gameData)
        console.log(arrTurn)
        console.log(arrLabel)
          setGameResults((old) => {
          return {...old, [key]: snap.val()}
          })
        setTurn(arrTurn);
        setLabel(arrLabel)
      })

    });
    return () => {
      refs.forEach(ref => ref.off());
    }
  }, []);

console.log(gameResults)
console.log(turn)
console.log(label)
  return (
    <ContainerResults>
      <BarChart turn={turn} Label={label} />
    </ContainerResults>
  )
}

export default ViewResults;

