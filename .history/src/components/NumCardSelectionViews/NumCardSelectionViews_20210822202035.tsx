import React, { useEffect, useState } from 'react';
import { ContainerNumCardSelectedViews, ButtonNumCardSelectionViews } from './NumCardSelectorViews.styles';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { startGame, changeNumberOfCards } from './../../redux/gameSlice';
//TS
import { CardType } from './../../setup';

export type IStartGame = {
  isOpen: boolean,
  handleGame: () => void;
};


const NumCardSelectionViews: React.FC<IStartGame> = ({isOpen, handleGame}) => {


  return (
    <ContainerNumCardSelectedViews>
      <h2>Wybierz poziom gry!</h2>
      <div>
        <ButtonNumCardSelectionViews onClick={() => handleGame()}>Poziom - bardzo łatwy</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews onClick={() => handleGame()}>Poziom - łatwy</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews onClick={() => handleGame()}>Poziom - trudny</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews onClick={() => handleGame()}>Poziom - bardzo trudny</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews onClick={() => handleGame()}>Poziom - zaawansowany</ButtonNumCardSelectionViews>
      </div>
    </ContainerNumCardSelectedViews>
  )
}

export default NumCardSelectionViews
