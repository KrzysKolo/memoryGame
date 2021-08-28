import styled from "styled-components";
import { Container } from './../../App.styles';
//Files
import victory from './../../img/victory.png';

export const ContainerHome = styled(Container)`
  h1 {
    font-family: 'Almendra Display', cursive;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.5rem auto;
  }
`;
export const DivHome = styled.div`
  display: flex;
  font-size: 1rem;
  justify-content: space-evenly;
  width: 100%;
  div {
    display: flex;
    p {
      margin-right: 2rem;
    }
  }
`;

export const ButtonHome = styled.p`
  background-color: transparent;
  border-left: 1px solid rgba(238, 197, 139, 0.2);
  border-radius: 10px;
  border-right: 1px solid rgba(238, 197, 139, 0.2);
  box-shadow: 3px 3px 5px rgb(4 10 40), -3px -3px 5px rgb(4 10 40);
  cursor: pointer;
  font-weight: 500;
  line-height: 2.5rem;
  padding: 3px 30px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: rgb(238, 197, 139);
    box-shadow: inset 2px 2px 2px rgb(4 10 40), inset -2px -2px 2px rgb(4 10 40);
    color: rgb(5, 14, 63);
  }
`;

export const DivVictory = styled.div`
  background: url({victory}) no-repeat;
  animation: victory 500ms steps(14) infinite;
`;

@keyframes victory
{
  0% {transform:rotateX(180deg) translateX(0) translateY(0) scale(1);}
  100% {transform:rotateX(180deg) translateX(300px) translateY(45px) scale(0.1);}
}