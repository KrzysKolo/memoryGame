import card1 from './img/card_1.jpg';
import card2 from './img/card_2.jpg';
import card3 from './img/card_3.jpg';
import card4 from './img/card_4.jpg';
import card5 from './img/card_5.jpg';
import card6 from './img/card_6.jpg';
import card7 from './img/card_7.jpg';
import card8 from './img/card_8.jpg';
//Cardback
import cardDack from './img/card_back.jpg';

export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string
};

const cards: string[] = [card1, card2, card3, card4, card5, card6, card7, card8];
