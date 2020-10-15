import React from 'react';
import { Container, Item, Row, Column, List } from './styles';

const PokemonsList: React.FC<any> = ({ data, viewMode }: any) => {
  return (
    <Container>
      {viewMode === 'GRID' && (
        <Row>
          {data?.map((item: any) => (
            <Item key={item.name}>{item.name}</Item>
          ))}
        </Row>
      )}
      {viewMode === 'LIST' && (
        <Column>
          {data?.map((item: any) => (
            <List key={item.name}>{item.name}</List>
          ))}
        </Column>
      )}
    </Container>
  );
};

export default PokemonsList;
