import styled from 'styled-components';
import { Danger, White } from '../../styles/palette';

export const Container = styled.section`
  width: 960px;
  height: 246px;
  background: #ffffff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  border: 1px solid ${Danger[0]};
  color: ${Danger[200]};
`;

export const Button = styled.button`
  padding: 0 2rem;
  height: 42px;
  background: ${Danger[0]};
  border-radius: 10px;
  border: none;
  color: ${White[0]};
  font-weight: 500;
`;
