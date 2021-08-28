import React, { useEffect, useState } from 'react';
import { ContainerNumCardSelectedViews, ButtonNumCardSelectionViews } from './NumCardSelectorViews.styles';

const NumCardSelectionViews = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [numberOfCard, setNumberOfCard] = useState("");
  const dispatch = useDispatch();

  const handleGame = () => {
    console.log("zaczynam grę");
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    dispatch(startGame(isOpen));
  }, [isOpen])
  console.log(isOpen);

  return (
    <ContainerNumCardSelectedViews>
      <h2>Wybierz poziom gry!</h2>
      <div>
        <ButtonNumCardSelectionViews onClick={handleStartGame}>Poziom - bardzo łatwy</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews onClick={handleStartGame}>Poziom - łatwy</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews onClick={handleStartGame}>Poziom - trudny</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews onClick={handleStartGame}>Poziom - bardzo trudny</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews onClick={handleStartGame}>Poziom - zaawansowany</ButtonNumCardSelectionViews>
      </div>
    </ContainerNumCardSelectedViews>
  )
}

export default NumCardSelectionViews
