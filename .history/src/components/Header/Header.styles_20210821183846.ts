import styled from "styled-components";
import { Container } from './../../App.styles';

export const ContainerHeader = styled(Container)`
border: 1px solid white;
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
  padding: 0 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgb(4 10 40), -3px -3px 5px rgb(4 10 40);
`;