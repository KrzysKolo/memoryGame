import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: rgb(5, 14, 63);
  color: rgb(238, 197, 139);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 0.5rem;
  border: 1px solid yellow;
`;