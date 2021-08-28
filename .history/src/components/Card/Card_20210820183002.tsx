import React from 'react'
//types
import { CardType } from '../../setup';
//styles
import { Wrapper, FrontImg, BackImg } from './Card.styles';

type Props = {
  card: CardType;
  callback: (card: CardType) => void;

};

const Card: React.FC<Props> = ({card, callback}) => {
  const handleClick = () => {
    if (card.clickable) callback(card);
  }
  return (
    <Wrapper onClick={handleClick}>
      sasasa
    </Wrapper>
  )
}

export default Card
