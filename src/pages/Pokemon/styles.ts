import styled from 'styled-components';
import { Danger, Warning, White } from '../../styles/palette';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3rem 3rem 3rem;
  height: 100vh;
`;

export const Information = styled.div`
  width: 960px;
  // height: 306px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const PokeData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;

export const TypesCard = styled.div`
  background-color: ${Warning[200]};
  width: 400px;
  padding: 1rem 2rem;
  color: white;
  border-radius: 10px;
  margin: 2rem 0;

  h3 {
    font-weight: 400;
  }
`;

export const TypesItemContainer = styled.div`
  display: flex;
`;

export const TypesItemCard = styled.div`
  padding: 5px;
  background-color: ${Warning[400]};
  margin: 2px;
  border-radius: 5px;
  font-size: 12px;
`;

export const Loading = styled.div`
  border-radius: 30rem;
  border: 5px dashed ${Danger[0]};
  width: 34px;
  height: 34px;
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

export const Button = styled.button`
  padding: 0 2rem;
  height: 42px;
  background: ${Danger[0]};
  border-radius: 10px;
  border: none;
  color: ${White[0]};
  font-weight: 500;
  transition: 450ms;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;
