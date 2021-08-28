import * as React from 'react';
import { useEffect, useState} from 'react';
import { ContainerHome, DivHome, ButtonHome } from './Home.styles';
//Components
import { Card } from './../';
// Setup
import { createBoard } from './../../setup';
import { shuffleArray } from './../../utils';
// Types
import { CardType } from './../../setup';
// Styles
import { Grid, Wrapper, Container } from './../../App.styles';
//Sound
import useSound from 'use-sound';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { StartStopGame, MatchedPairs, UpTurn } from './../../redux/gameSlice';
import { StartStopGame } from './../../redux/userSlice';

const Home: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(undefined);
  const [turn, setTurn] = useState(2)
  const [isOpen, setIsOpen] = useState(false);

  const [play] = useSound('./sounds/alarm.mp3');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MatchedPairs(matchedPairs));
    if (matchedPairs === cards.length/2) {
      console.log('Game Won!');
      setGameWon(true);
      setClickedCard(undefined);
      setTimeout(() => {
        dispatch(StartStopGame(!isOpen))
      }, 1500);
    };
    play();
  }, [matchedPairs]);



  const handleCardClick = (currentClickedCard: CardType) => {
    // Flip the card
    setCards(prev =>
      prev.map(card => (card.id === currentClickedCard.id ? { ...card, flipped: true, clickable: false } : card))
    );
    // If this is the first card that is flipped
    // just keep it flipped
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    // If it's a match
    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs(prev => prev + 1);
      setTurn(prev => prev + 1);
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentClickedCard.id ? { ...card, clickable: false } : card
        )
      );
      setClickedCard(undefined);
      dispatch(UpTurn(turn));
      return;
    }
    else {
      setTurn(prev => prev + 1);
      dispatch(UpTurn(turn));

    };


    console.log(matchedPairs)
    console.log(currentClickedCard.id)
    console.log(clickedCard.id)
    console.log(turn)


    // If it's not a matched pair, wait one second and flip them back
    setTimeout(() => {
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, 1000);
    setClickedCard(undefined);
  };

  console.log(matchedPairs)

  const _matchedPairs = useSelector(MatchedPairs);
  const _upTurn = useSelector(UpTurn);
  const _isOpen = useSelector(StartStopGame)

  console.log(_matchedPairs.payload.game.matchedPairs)

  const handleClick = () => {
    setIsOpen(prev => !prev);
    dispatch(StartStopGame(!isOpen));
    dispatch(UpTurn(_upTurn.payload.game.turn + 1))
  };


  return (
    <Wrapper>
      <ContainerHome>
        <h1>Disney - a memory game with React, Redux and Firebase</h1>
        <DivHome>
        {isOpen
          ? (<ButtonHome onClick={handleClick} >Stop!</ButtonHome>)
          : (<ButtonHome onClick={handleClick} >Play!</ButtonHome>)
        }
        <div>
          <p>Turns: <span>{_upTurn.payload.game.turn}</span></p>
          <p>Pairs found: <span>{_matchedPairs.payload.game.matchedPairs}</span></p>
        </div>
        </DivHome>

        {_isOpen.payload.game.isOpen
          ? (
            <Grid>
              {cards.map(card => (
                <Card key={card.id} card={card} callback={handleCardClick} />
              ))}
            </Grid>
          )
          : ("")
        }
        {_matchedPairs.payload.game.matchedPairs === 16
          ? (<div>Wygrałeś</div>)
          : (<div></div>)
        }
      </ContainerHome>
    </Wrapper>
  );
};


export default Home
