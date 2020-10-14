import { Reducer } from 'redux';

import { PokemonsState, PokemonsType } from './types';

const INITIAL_STATE: PokemonsState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<PokemonsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PokemonsType.LOAD_REQUEST:
      return { ...state, loading: true };
    case PokemonsType.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case PokemonsType.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;