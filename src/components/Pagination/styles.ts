import styled from 'styled-components';
import { Danger, White } from '../../styles/palette';

export const Container = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
  padding: 2rem 0 0 0;
`;

export const Button = styled.button`
  padding: 0 2rem;
  height: 42px;
  background: ${White[0]};
  border-radius: 10px;
  border: none;
  color: ${Danger[0]};
  font-weight: 500;
  transition: 450ms;
  outline: none;

  &:hover {
    opacity: 0.9;
    color: ${Danger[100]};
  }

  &:active {
    opacity: 0.8;
    color: ${Danger[100]};
  }
`;
