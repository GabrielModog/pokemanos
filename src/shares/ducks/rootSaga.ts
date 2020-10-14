import { all, takeLatest } from 'redux-saga/effects';

import { PokemonsType } from './pokemons/types';
import loadPokemons from './pokemons/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(PokemonsType.LOAD_REQUEST, loadPokemons)]);
}
