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
