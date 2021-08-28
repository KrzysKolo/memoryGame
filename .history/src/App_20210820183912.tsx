import React, { useState } from 'react';
//components
import { Card } from './components';
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

  return (
    <div>
      <Grid>
        {cards.map(card => (
          <Card key={card.id} callback={handleCardClick}>
        ))}
      </Grid>
    </div>
  );
};

export default App;