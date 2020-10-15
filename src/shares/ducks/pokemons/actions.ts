import { action } from 'typesafe-actions';
import { PokemonsType } from './types';

export const changeLayout = (layout: string) =>
  action(PokemonsType.CHANGE_LAYOUT, { layout });

export const loadRequest = () => action(PokemonsType.LOAD_REQUEST);

export const loadSuccess = (data: any) =>
  action(PokemonsType.LOAD_SUCCESS, { data });

export const loadFailure = () => action(PokemonsType.LOAD_FAILURE);

export const searchRequest = (search: string) =>
  action(PokemonsType.SEARCH_REQUEST, { search });

export const searchSuccess = (data: any) =>
  action(PokemonsType.SEARCH_SUCCESS, { data });

export const searchFailure = () => action(PokemonsType.SEARCH_FAILURE);

export const searchTypeRequest = (typeSearch: string) =>
  action(PokemonsType.SEARCH_TYPE_REQUEST, { typeSearch });

export const searchByTypeSuccess = (data: any) =>
  action(PokemonsType.SEARCH_TYPE_SUCCESS, { data });

export const searchByTypeFailure = () =>
  action(PokemonsType.SEARCH_TYPE_FAILURE);
