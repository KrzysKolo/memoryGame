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
import { startGame } from './redux/gameSlice';


const App = () => {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play] = useSound('./sounds/alarm.mp3');

  const _isOpen = useSelector(startGame);

  console.log(_isOpen, "App")

  useEffect(() => {
    if (matchedPairs === cards.length/2) {
      console.log('Game Won!');
      setGameWon(true);
      setIsPlaying(true);
    }
    play()
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
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentClickedCard.id ? { ...card, clickable: false } : card
        )
      );
      setClickedCard(undefined);
      return;
    }
    console.log(matchedPairs)
    console.log(currentClickedCard.id)
    console.log(clickedCard.id)


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
        {_isOpen
          ? (
            <Grid>
              {cards.map(card => (
                <Card key={card.id} card={card} callback={handleCardClick} />
              ))}
            </Grid>
          )
          : (<div>Wybierz poziom gry</div>)
        }
      </Container>
    </Wrapper>
  );
};

export default App;