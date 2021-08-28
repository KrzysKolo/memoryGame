import styled from "styled-components";
import { Container } from './../../App.styles';

export const ContainerHeader = styled(Container)`

  h1 {
    font-family: 'Almendra Display', cursive;
    font-size: 1.5rem;
    margin: 0.75rem auto;
    font-weight: bold;
  }
`;

export const DivHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-size: 1rem;
`;

export const ButtonHeader = styled.p`
  background-color: transparent;
  line-height: 2.5rem;
  padding: 3px 30px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgb(4 10 40), -3px -3px 5px rgb(4 10 40);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-left: 1px solid rgba(238, 197, 139, 0.2);
  border-right: 1px solid rgba(238, 197, 139, 0.2);
  font-weight: 500;
  &:hover {
    box-shadow: inset 2px 2px 2px rgb(4 10 40), inset -2px -2px 2px rgb(4 10 40);
    background-color: rgb(238, 197, 139);
    color: rgb(5, 14, 63);
  }
`;

export const LoginContainer=styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  div {
    display: flex;
  }
`;