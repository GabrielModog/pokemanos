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
  color: ${Danger[100]};
  height: 42px;
  padding: 0 2rem;
  border-radius: 10px;
  outline: none;
  font-size: 14px;
  width: 100%;
  &::placeholder {
    color: ${Danger[100]};
  }
  margin: 0 2px;
`;

export const Select = styled.select`
  border: 1px solid ${Danger[0]};
  color: ${Danger[100]};
  height: 42px;
  padding: 0 2rem;
  border-radius: 10px;
  outline: none;
  font-size: 14px;
  width: 50%;
  margin: 0 2px;
`;

export const FormGroup = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  padding: 1rem;
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
