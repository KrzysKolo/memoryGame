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
  font-size: 1rem;
`;