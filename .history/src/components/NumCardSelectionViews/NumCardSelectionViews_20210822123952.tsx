import React, { useEffect, useState } from 'react';
import { ContainerNumCardSelectedViews, ButtonNumCardSelectionViews } from './NumCardSelectorViews.styles';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { startGame } from './../../redux/gameSlice';


const NumCardSelectionViews = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [numberOfCard, setNumberOfCard] = useState(8);
  const dispatch = useDispatch();

  const handleGame = (e) => {
    console.log("zaczynam grę");
    setIsOpen(prev => !prev);
    setNumberOfCard(e)
  };

  useEffect(() => {
    dispatch(startGame(isOpen, numberOfCard ));
  }, [isOpen])
  console.log(isOpen);

  return (
    <ContainerNumCardSelectedViews>
      <h2>Wybierz poziom gry!</h2>
      <div>
        <ButtonNumCardSelectionViews onClick={() => handleGame(8)}>Poziom - bardzo łatwy</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews onClick={() => handleGame(10)}>Poziom - łatwy</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews onClick={() => handleGame(12)}>Poziom - trudny</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews onClick={() => handleGame(14)}>Poziom - bardzo trudny</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews onClick={() => handleGame(16)}>Poziom - zaawansowany</ButtonNumCardSelectionViews>
      </div>
    </ContainerNumCardSelectedViews>
  )
}

export default NumCardSelectionViews
