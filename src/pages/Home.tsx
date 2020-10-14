import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRequest } from '../shares/ducks/pokemons/actions';

const Home = () => {
  const dispatch = useDispatch();
  const pokemons: any = useSelector(
    (state: any) => state.pokemons.data.results
  );

  useEffect(() => {
    dispatch(loadRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {pokemons && pokemons?.map((pokemon: any) => <div>{pokemon.name}</div>)}
    </div>
  );
};

export default Home;
