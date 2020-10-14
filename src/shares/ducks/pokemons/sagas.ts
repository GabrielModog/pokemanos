import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

// import fetchPokemons from '../../../services'

export default function* loadPokemons() {
  try {
    const response = yield call(api.get, 'pokemon');
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
