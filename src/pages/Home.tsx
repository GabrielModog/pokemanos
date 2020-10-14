import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRequest, searchRequest } from '../shares/ducks/pokemons/actions';

const Home = () => {
  const dispatch = useDispatch();
  const pokemons: any = useSelector((state: any) => state);

  useEffect(() => {
    // dispatch(loadRequest());
    dispatch(searchRequest('bulbasaur'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(pokemons);

  return (
    <div>
      {/* {pokemons && pokemons?.map((pokemon: any) => <div>{pokemon.name}</div>)} */}
    </div>
  );
};

export default Home;
