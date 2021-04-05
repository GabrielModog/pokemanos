import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRequest } from '../../shares/ducks/pokemons/actions';

import PokemonsList from '../../components/Pokemons';
import Form from '../../components/Form';
import { Container, Title, Loading } from './styles';
import Pagination from '../../components/Pagination';

const Home = () => {
  const dispatch = useDispatch();
  const pokemons: any = useSelector((state: any) => state.pokemons);
  const layout: any = useSelector((state: any) => state.pokemons.layout);

  useEffect(() => {
    dispatch(loadRequest(0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title>POKEMANOS</Title>

      <Form />

      {pokemons.loading && <Loading />}
      {pokemons.error && <Loading />}
      <PokemonsList data={pokemons.data.results} viewMode={layout} />

      <Pagination />
    </Container>
  );
};

export default Home;
