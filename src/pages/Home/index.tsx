import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadRequest } from '../../shares/ducks/pokemons/actions';

import PokemonsList from '../../components/PokemonsList';
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
      <Link to="/">
        <Title>POKEMANOS</Title>
      </Link>
      <Form />
      {pokemons.loading && <Loading />}
      {pokemons.error && <Loading />}
      <PokemonsList data={pokemons.data.results} viewMode={layout} />
      <Pagination />
    </Container>
  );
};

export default Home;
