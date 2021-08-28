import styled from "styled-components";
import { Container } from './../../App.styles';

export const ContainerHeader = styled(Container)`

  h1 {
    font-family: 'Almendra Display', cursive;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.75rem auto;
  }
  div {
    .navLink {
      color: rgb(238, 197, 139);
      text-decoration: none;
    }
  }
`;


export const ButtonHeader = styled.p`
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

export const LoginContainer=styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  width: 100%;
  div {
    display: flex;
  }
`;