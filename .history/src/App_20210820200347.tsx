import React, { useState } from 'react';
//components
import Card from './components/Card/Card';
//styles
import { Grid } from './App.styles';
import { createBoard } from './setup';
import { shuffleArray } from './utils';
//types
import { CardType } from './setup';

const App = () => {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(undefined);

  const handleCardClick = (currentClickedCard: CardType) => {
    console.log("klik");
    setCards(prev => prev.map(card => card.id === currentClickedCard.id
      ? { ...card, flipped: true, clickable: false, }
      : card));

    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

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

    setTimeout(() => {
      setCards(prev =>
        prev.map(card => card.id === clickedCard.id || card.id === currentClickedCard.id
          ? { ...card, flipped: false, clickable: true, }
          : card));
      }, 1000)

  };

  return (
    <div>
     <Grid>
        {cards.map(card => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </Grid>
    </div>
  );
};

export default App;