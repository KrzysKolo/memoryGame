import React from 'react'
//types
import { CardType } from '../../setup';
//styles
import { Wrapper, FrontImg, BackImg } from './Card.styles';
import useSound from 'use-sound';

type Props = {
  card: CardType;
  callback: (card: CardType) => void;

};

const Card: React.FC<Props> = ({ card, callback, isPlaying }) => {
  const [play] = useSound('./sounds/alarm.mp3');
  const handleClick = () => {
    if (card.clickable) callback(card);
  }
  return (
    <Wrapper onClick={handleClick}>
      <FrontImg flipped={card.flipped} src={card.frontImage} alt="card-front" />
      <BackImg flipped={card.flipped} src={card.backImage} alt="card-back" />
    </Wrapper>
  )
}

export default Card
