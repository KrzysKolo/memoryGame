import React from 'react';
import { ContainerNumCardSelectedViews, ButtonNumCardSelectionViews } from './NumCardSelectorViews.styles';

const NumCardSelectionViews = () => {
  return (
    <ContainerNumCardSelectedViews>
      Wybierz poziom gry!
      <div>
        <ButtonNumCardSelectionViews></ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews></ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews></ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews></ButtonNumCardSelectionViews>
        <ButtonNumCardSelectionViews></ButtonNumCardSelectionViews>
      </div>
    </ContainerNumCardSelectedViews>
  )
}

export default NumCardSelectionViews
