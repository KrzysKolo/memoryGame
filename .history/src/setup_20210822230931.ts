import card1 from './img/card_1.jpg';
import card2 from './img/card_2.jpg';
import card3 from './img/card_3.jpg';
import card4 from './img/card_4.jpg';
import card5 from './img/card_5.jpg';
import card6 from './img/card_6.jpg';
import card7 from './img/card_7.jpg';
import card8 from './img/card_8.jpg';
import card9 from './img/card_9.jpg';
import card10 from './img/card_10.jpg';
import card11 from './img/card_11.jpg';
import card12 from './img/card_12.jpg';
import card13 from './img/card_13.jpg';
import card14 from './img/card_14.jpg';
import card15 from './img/card_15.jpg';
import card16 from './img/card_16.jpg';

// Cardback
import cardBack from './img/card_back.jpg';

export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;

};

// Put the images in an array
const cards: string[] = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16];

export const createBoard = (): CardType[] =>
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardBack,
    frontImage: card,
    clickable: true,
    matchingCardId: i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`

  }));