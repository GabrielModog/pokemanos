import styled from 'styled-components';

import { Danger, White } from '../../styles/palette';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Danger[0]};
  padding: 0 3rem 3rem 3rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: ${White[0]};
  margin: 2rem 0;
`;

export const Loading = styled.div`
  margin-top: 4rem;
  width: 42px;
  height: 42px;
  border: 5px solid white;
  animation: spinner 500ms linear infinite;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
