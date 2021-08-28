import React from 'react';
import { ContainerNumCardSelectedViews, ButtonNumCardSelectionViews } from './NumCardSelectorViews.styles';

const NumCardSelectionViews = () => {
  return (
    <ContainerNumCardSelectedViews>
      Wybierz poziom gry!
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
