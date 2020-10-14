import React from 'react';
import { Container, Item, Row } from './styles';

const PokemonsList: React.FC<any> = ({ data }: any) => {
  return (
    <Container>
      <Row>
        {data?.map((item: any) => (
          <Item key={item.name}>{item.name}</Item>
        ))}
      </Row>
    </Container>
  );
};

export default PokemonsList;
