import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRequest } from '../../shares/ducks/pokemons/actions';

import PokemonsList from '../../components/PokemonsList';
import Form from '../../components/Form';
import { Container, Title } from './styles';
import Pagination from '../../components/Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const pokemons: any = useSelector((state: any) => state.pokemons);

  useEffect(() => {
    dispatch(loadRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title>POKEMANOS</Title>
      <Form />
      <PokemonsList data={pokemons.data.results} viewMode="GRID" />
      <Pagination />
    </Container>
  );
};

export default Home;
