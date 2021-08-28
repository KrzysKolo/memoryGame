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

  const handleCardClick = (carrentClickedCard: CardType) => {
    console.log("klik");
    setCards(prev => prev.map(card => card.id === carrentClickedCard.id
      ? { ...card, flipped: true, clickable: false, }
      : card));
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