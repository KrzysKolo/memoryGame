import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  border: 1px solid rgba(238, 197, 139, 0.1);
  border-radius: 10px;
  perspective: 1000px;
  .front.flipped {
    z-index: 1;
    transform: rotateY(180deg);
  }
 `;

type Props = {
  flipped: boolean;
};

const sharedStyles = css`
  width: 100%;
  height: 100%;
  transition: all 0.5s;
  backface-visibility: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
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