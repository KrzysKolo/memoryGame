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
  turn: number,
  gameData: string,
  uid: string,
};
export interface Game {
  arrTurn: Array<number | null | any>;
  arrLabel: Array<number | null | any>;

}

const ViewResults = () => {

  const [gameResults, setGameResults] = useState<Record<string, IGameProps>>({});
  const [turn, setTurn] = useState([])
  const [label, setLabel] = useState([])
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
        console.log(arrTurn)
          setGameResults((old) => {
          return {...old, [key]: snap.val()}
          })
      })

    });
    return () => {
      refs.forEach(ref => ref.off());
    }
  }, []);

console.log(gameResults)
console.log(turn)
  return (
    <ContainerResults>

    </ContainerResults>
  )
}

export default ViewResults;

