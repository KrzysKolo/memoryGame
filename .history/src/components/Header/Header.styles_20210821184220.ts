import styled from "styled-components";
import { Container } from './../../App.styles';

export const ContainerHeader = styled(Container)`

  h1 {
    font-family: 'Almendra Display', cursive;
    font-size: 2rem;
    margin: 1rem auto;
    font-weight: bold;
  }
`;

export const DivHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-size: 1.25rem;
`;

export const ButtonHeader = styled.p`
  background-color: transparent;
  line-height: 3rem;
  padding: 0 30px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgb(4 10 40), -3px -3px 5px rgb(4 10 40);
  cursor: pointer;
  &:hover {
    box-shadow: inset 3px 3px 3px rgb(4 10 40), -3px -3px 3px rgb(4 10 40);
    background-color: rgb(238, 197, 139);
    color: rgb(5, 14, 63);
  }
`;