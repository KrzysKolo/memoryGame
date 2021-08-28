import * as React from 'react';
import { useEffect, useState} from 'react';
import { ContainerHome, DivHome, ButtonHome } from './Home.styles';
//Components
import { Card } from './../';
// Setup
import { createBoard } from './../../setup';
import { shuffleArray } from './../../utils';
// Types
import { CardType } from './../../setup';
// Styles
import { Grid, Wrapper, Container } from './../../App.styles';
//Sound
import useSound from 'use-sound';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { StartStopGame, MatchedPairs, UpTurn } from './../../redux/gameSlice';
import { setUserLogin } from './../../redux/userSlice';
//Firebase
import { firebase } from './../../auth/initFirebase';
import 'firebase';

const db = firebase.database();

const Home: React.FC = () => {

  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(undefined);
  const [turn, setTurn] = useState(2)
  const [isOpen, setIsOpen] = useState(false);

  const [play] = useSound('./sounds/alarm.mp3');
  const [playApp] = useSound('./sounds/584142__a3-1__kick-game.mp3');

  const dispatch = useDispatch();

  const _matchedPairs = useSelector(MatchedPairs);
  const _upTurn = useSelector(UpTurn);
  const _isOpen = useSelector(StartStopGame)
  const _user = useSelector(setUserLogin)

  useEffect(() => {
    dispatch(MatchedPairs(matchedPairs));
    if (matchedPairs === cards.length/2) {
      setClickedCard(undefined);
      setTimeout(() => {
        setGameWon(true);
        dispatch(StartStopGame(false));
        playApp();
      }, 1000);
    };
    play();
  }, [matchedPairs]);

  useEffect(() => {
    if (isOpen && gameWon) {
      saveGame();
      setTimeout(() => {
        setTurn(2);
        dispatch(UpTurn(0));
        dispatch(MatchedPairs(0));
      }, 1500);
    }
   },[isOpen, gameWon])

  const handleCardClick = (currentClickedCard: CardType) => {

    setCards(prev =>
      prev.map(card => (card.id === currentClickedCard.id ? { ...card, flipped: true, clickable: false } : card))
    );

    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    };

    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs(prev => prev + 1);
      setTurn(prev => prev + 1);
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentClickedCard.id ? { ...card, clickable: false } : card
        )
      );
      setClickedCard(undefined);
      dispatch(UpTurn(turn));
      return;
    }
    else {
      setTurn(prev => prev + 1);
      dispatch(UpTurn(turn));
    };
    setTimeout(() => {
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, 1000);
    setClickedCard(undefined);
  };

  const handleClickStartGame = () => {
    setIsOpen(true);
    dispatch(StartStopGame(true));
    setCards(shuffleArray(createBoard()));
    dispatch(UpTurn(_upTurn.payload.game.turn + 1))
    setMatchedPairs(0);
    setGameWon(false);
  };
  const handleClickStopGame = () => {
    setGameWon(false);
    setTurn(2);
    dispatch(StartStopGame(false));
    dispatch(UpTurn(0))
    dispatch(MatchedPairs(0));
  };

  const saveGame = async () => {
    const gistRef = db.ref("game").push();
    await db.ref(`userGame/${_user.payload.user.user.uid}/${gistRef.key}`).set(true);
    await gistRef.set({
      uid: _user.payload.user.user.uid,
      turn: _upTurn.payload.game.turn,
      gameData: new Date().toLocaleString(),
    })
  };

 return (
    <Wrapper>
      <ContainerHome>
        <h1>Disney - a memory game with React, Redux and Firebase</h1>

        <DivHome>
        {_isOpen.payload.game.isOpen
          ? (<ButtonHome onClick={handleClickStopGame} >Stop Game!</ButtonHome>)
          : (<ButtonHome onClick={handleClickStartGame} >New Game!</ButtonHome>)
        }
        <div>
          <p>Turns: <span>{_upTurn.payload.game.turn}</span></p>
          <p>Pairs found: <span>{_matchedPairs.payload.game.matchedPairs}</span></p>
        </div>
        </DivHome>

        {_isOpen.payload.game.isOpen
          ? (
            <Grid>
              {cards.map(card => (
                <Card key={card.id} card={card} callback={handleCardClick} />
              ))}
            </Grid>
          )
          : ("")
        }
        {_matchedPairs.payload.game.matchedPairs === 16
          ? (<div>Wygrałeś</div>)
          : ("")
        }
      </ContainerHome>
    </Wrapper>
  );
};

export default Home
