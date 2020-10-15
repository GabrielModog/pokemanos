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

export const Item = styled.div`
  width: 310px;
  height: 200px;
  background: #ffffff;
  border-radius: 10px;
  margin: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
