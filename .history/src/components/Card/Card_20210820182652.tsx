import React from 'react'
//types
import { CardType } from '../../setup';
//styles
import { Wrapper, FrontImg, BackImg } from './Card.styles';

type Props = {
  card: CardType;
  callback: (card: CardType) => void;

};

const Card: React.FC<> = () => {
  return (
    <div>
      sasasa
    </div>
  )
}

export default Card
