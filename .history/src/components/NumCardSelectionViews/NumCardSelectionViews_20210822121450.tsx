import React from 'react';
import { ContainerNumCardSelectedViews, ButtonNumCardSelectionViews } from './NumCardSelectorViews.styles';

const NumCardSelectionViews = () => {
  return (
    <ContainerNumCardSelectedViews>
      <h1>Wybierz poziom gry!</h1>
      <div>
        <ButtonNumCardSelectionViews>Poziom - bardzo łatwy</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews>Poziom - łatwy</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews>Poziom - trudny</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews>Poziom - bardzo trudny</ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews>Poziom - zaawansowany</ButtonNumCardSelectionViews>
      </div>
    </ContainerNumCardSelectedViews>
  )
}

export default NumCardSelectionViews
