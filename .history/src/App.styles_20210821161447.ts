import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: rgb(5, 14, 63);
  color: rgb(238, 197, 139);
  min-height: 100vh;
  width: 100vw;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 0.5rem;
  border: 1px solid yellow;
`;