import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: rgb(8, 18, 80);
  color: #000;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 0.5rem;
  border: 1px solid yellow;
`;