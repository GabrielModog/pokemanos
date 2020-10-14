import { action } from 'typesafe-actions';
import { PokemonsType } from './types';

export const loadRequest = () => action(PokemonsType.LOAD_REQUEST);

export const loadSuccess = (data: any) =>
  action(PokemonsType.LOAD_SUCCESS, { data });

export const loadFailure = () => action(PokemonsType.LOAD_FAILURE);
