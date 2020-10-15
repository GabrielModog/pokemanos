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

export function* loadPokemons() {
  try {
    const response = yield call(api.get, 'pokemon');
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
    yield put(searchByTypeSuccess(response.data));
  } catch (err) {
    yield put(searchByTypeFailure());
  }
}
