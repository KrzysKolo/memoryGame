import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: rgb(5, 14, 63);
  color: rgb(238, 197, 139);
  min-height: 100vh;
  width: 100vw;
`;

export const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 0.75rem;
  border: 1px solid yellow;
`;