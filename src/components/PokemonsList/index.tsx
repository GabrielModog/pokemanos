import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Item, Row, Column, List } from './styles';

const PokemonsList: React.FC<any> = ({ data, viewMode }: any) => {
  const history = useHistory();

  const goToPokemon = (name: any) => {
    history.push(`/pokemon/${name}`);
  };

  return (
    <Container>
      {viewMode === 'GRID' && (
        <Row>
          {data?.map((item: any) => (
            <Item key={item.name} onClick={() => goToPokemon(item.name)}>
              {item.name}
            </Item>
          ))}
        </Row>
      )}
      {viewMode === 'LIST' && (
        <Column>
          {data?.map((item: any) => (
            <List key={item.name} onClick={() => goToPokemon(item.name)}>
              {item.name}
            </List>
          ))}
        </Column>
      )}
    </Container>
  );
};

export default PokemonsList;
