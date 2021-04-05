import styled from 'styled-components';

export const Container = styled.section`
  width: 960px;
  margin: 5px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div`
  width: 955px;
  height: 142px;
  background: #ffffff;
  border-radius: 10px;
  margin: 5px 0;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 350ms;
`;

export const Item = styled.div`
  width: 310px;
  height: 200px;
  background: #ffffff;
  border-radius: 10px;
  margin: 5px;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 350ms;
  &:hover {
    opacity: 0.8;
  }
`;
