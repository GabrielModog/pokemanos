import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import {
  loadSuccess,
  loadFailure,
  searchSuccess,
  searchFailure,
  searchByTypeSuccess,
  searchByTypeFailure,
} from './actions';

export function* loadPokemons(payload: any) {
  try {
    const { pagination } = payload.payload;
    const response = yield call(
      api.get,
      `pokemon/?offset=${pagination}&limit=20`
    );
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* searchPokemon(payload: any) {
  try {
    const { search } = payload.payload;
    const response = yield call(api.get, `pokemon/${search}`);
    yield put(searchSuccess(response.data));
  } catch (err) {
    yield put(searchFailure());
  }
}

export function* searchByType(payload: any) {
  try {
    const { typeSearch } = payload.payload;
    const response = yield call(api.get, `type/${typeSearch}`);
    const cleanData = response.data.pokemon.map((item: any) => ({
      name: item.pokemon.name,
      url: item.pokemon.url,
      slot: item.pokemon.slot,
    }));
    yield put(searchByTypeSuccess(cleanData));
  } catch (err) {
    yield put(searchByTypeFailure());
  }
}
