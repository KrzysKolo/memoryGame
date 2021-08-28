import React, { useState } from 'react';
//components
import { Grid } from './App.styles';
//styles
import { createBoard } from './setup';
import { shuffleArray } from './utils';
//types
import { CardType } from './setup';

const App = () => {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  return (
    <div>
      <Grid>Start Here!</Grid>
    </div>
  );
};

export default App;