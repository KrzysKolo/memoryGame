import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid rgba(238, 197, 139, 0.1);
  border-radius: 10px;
  position: relative;
  perspective: 1000px;
  .front.flipped {
    transform: rotateY(180deg);
    z-index: 1;
  }
 `;

type Props = {
  flipped: boolean;
};

const sharedStyles = css`
  backface-visibility: hidden;
  cursor: pointer;
  height: 125px;
  transform-style: preserve-3d;
  transition: all 0.5s;
  width: 125px;
  @media (max-width: 768px ) {
    height: 80px;
    width: 80px;
  }
  @media (min-width: 769px) and ( max-width: 1200px ) {
    height: 100px;
    width: 100px;
  }

`;

export const FrontImg = styled.img<Props>`
  ${sharedStyles}
  z-index: ${props => (props.flipped ? 2 : 1)};
  transform: ${props => (props.flipped ? 'rotate(0deg)' : 'rotateY(180deg)')};
  border-radius: 10px;
  box-shadow:  3px 3px 5px rgb(4, 10, 40), -3px -3px 5px rgb(4, 10, 40);
`;

export const BackImg = styled.img<Props>`
  ${sharedStyles}
  z-index: ${props => (props.flipped ? 1 : 2)};
  transform: ${props => (props.flipped ? 'rotateY(180deg)' : 'rotate(360deg)')};
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 10px;
  box-shadow:  3px 3px 5px rgb(4, 10, 40), -3px -3px 5px rgb(4, 10, 40);
`;