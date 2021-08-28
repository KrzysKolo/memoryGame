import { useState, useEffect } from 'react';
import * as React from "react";
//CSS
import './index.css';
//Components
import { Card, Header } from './components';
// Setup
import { createBoard } from './setup';
import { shuffleArray } from './utils';
// Types
import { CardType } from './setup';
// Styles
import { Grid, Wrapper, Container } from './App.styles';
//Sound
import useSound from 'use-sound';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { StartStopGame, MatchedPairs, UpTurn } from './redux/gameSlice';


const App: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(undefined);
  const [turn, setTurn] = useState(2)

  const [play] = useSound('./sounds/alarm.mp3');

  const dispatch = useDispatch();
  const _isOpen = useSelector(StartStopGame);

  useEffect(() => {
    dispatch(MatchedPairs(matchedPairs));
    if (matchedPairs === cards.length/2) {
      console.log('Game Won!');
      setGameWon(true);
      setTimeout(() => {
        dispatch(StartStopGame(!_isOpen.payload.game.isOpen))
      }, 1500);
      setClickedCard(undefined);
    };
    play();
  }, [matchedPairs]);



  const handleCardClick = (currentClickedCard: CardType) => {
    // Flip the card
    setCards(prev =>
      prev.map(card => (card.id === currentClickedCard.id ? { ...card, flipped: true, clickable: false } : card))
    );
    // If this is the first card that is flipped
    // just keep it flipped
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    // If it's a match
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


    console.log(matchedPairs)
    console.log(currentClickedCard.id)
    console.log(clickedCard.id)
    console.log(turn)


    // If it's not a matched pair, wait one second and flip them back
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

  console.log(matchedPairs)
  return (
    <Wrapper>
      <Container>
        <Header />
        {_isOpen.payload.game.isOpen
          ? (
            <Grid>
              {cards.map(card => (
                <Card key={card.id} card={card} callback={handleCardClick} />
              ))}
            </Grid>
          )
          : (<div>Takie tam</div>)
        }
      </Container>
    </Wrapper>
  );
};

export default App;