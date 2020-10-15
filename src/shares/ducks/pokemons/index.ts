import { Reducer } from 'redux';

import { PokemonsState, PokemonsType } from './types';

const INITIAL_STATE: PokemonsState = {
  data: [],
  error: false,
  loading: false,
  layout: 'GRID',
};

const reducer: Reducer<PokemonsState | any> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case PokemonsType.CHANGE_LAYOUT:
      return {
        ...state,
        layout: action.payload.layout,
      };
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
    case PokemonsType.SEARCH_REQUEST:
      return { ...state, loading: true };
    case PokemonsType.SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: [action.payload.data],
      };
    case PokemonsType.SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    case PokemonsType.SEARCH_TYPE_REQUEST:
      return { ...state, loading: true };
    case PokemonsType.SEARCH_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case PokemonsType.SEARCH_TYPE_FAILURE:
      return {
        loading: false,
        error: false,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
