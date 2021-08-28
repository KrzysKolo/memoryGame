import React, { useEffect, useState } from 'react';
import { ContainerNumCardSelectedViews, ButtonNumCardSelectionViews } from './NumCardSelectorViews.styles';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { startGame, changeNumberOfCards } from './../../redux/gameSlice';
//TS
import { CardType } from './../../setup';

export type IStartGame = {
  isOpen: boolean,
  numberOfCard: number,
  handleGame: () => void;
};


const NumCardSelectionViews: React.FC<IStartGame> = ({isOpen, handleGame, numberOfCard}) => {


  return (
    <ContainerNumCardSelectedViews>
      <h2>Wybierz poziom gry!</h2>
      <div>

      </div>
    </ContainerNumCardSelectedViews>
  )
}

export default NumCardSelectionViews
