import React, { useEffect, useState } from 'react';
import { ContainerNumCardSelectedViews, ButtonNumCardSelectionViews } from './NumCardSelectorViews.styles';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { startGame, changeNumberOfCards } from './../../redux/gameSlice';
import { createSolutionBuilder } from 'typescript';


const NumCardSelectionViews: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [numberOfCard, setNumberOfCard] = useState<number>();
  const dispatch = useDispatch();


  const handleGame = (numberOfCard) => {
    console.log("zaczynam grę");
    const a = numberOfCard;
    setIsOpen(prev => !prev);
    setNumberOfCard(a)
  };

  useEffect(() => {
    dispatch(startGame(isOpen));
    dispatch(changeNumberOfCards(numberOfCard));
  }, [isOpen])
  console.log(isOpen);

  return (
    <ContainerNumCardSelectedViews>
      <h2>Wybierz poziom gry!</h2>
      <div>
        <ButtonNumCardSelectionViews onClick={() => handleGame(8)}>Poziom - bardzo łatwy</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews onClick={() => handleGame(9)}>Poziom - łatwy</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews onClick={() => handleGame(2)}>Poziom - trudny</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews onClick={() => handleGame(3)}>Poziom - bardzo trudny</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews onClick={() => handleGame(6)}>Poziom - zaawansowany</ButtonNumCardSelectionViews>
      </div>
    </ContainerNumCardSelectedViews>
  )
}

export default NumCardSelectionViews
