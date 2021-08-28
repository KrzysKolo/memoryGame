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
  justify-content: center;
  align-items: center;

`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  grid-gap: 0.75rem;
  padding: 20px 0;
  @media (max-width: 768px ) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (min-width: 769px) and ( max-width: 1200px ) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

