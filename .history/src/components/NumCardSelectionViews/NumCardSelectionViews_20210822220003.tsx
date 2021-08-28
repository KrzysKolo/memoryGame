import React, { useEffect, useState } from 'react';
import { ContainerNumCardSelectedViews, ButtonNumCardSelectionViews } from './NumCardSelectorViews.styles';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { startGame, changeNumberOfCards } from './../../redux/gameSlice';

export type IStartGame = {
  isOpen: boolean,
  handleGame: () => void;
};

const NumCardSelectionViews: React.FC<IStartGame> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleGame = () => {
    console.log("zaczynam grę");
    setIsOpen(prev => !prev);
    dispatch(startGame(!isOpen));
  };

  useEffect(() => {
    dispatch(startGame(isOpen));

  }, [isOpen])

  return (
    <ContainerNumCardSelectedViews>
      <h2>Wybierz poziom gry!</h2>
      <div>

      </div>
    </ContainerNumCardSelectedViews>
  )
}

export default NumCardSelectionViews
