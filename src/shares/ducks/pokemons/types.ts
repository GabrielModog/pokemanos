export enum PokemonsType {
  LOAD_REQUEST = '@pokemons/LOAD_REQUEST',
  LOAD_SUCCESS = '@pokemons/LOAD_SUCCESS',
  LOAD_FAILURE = '@pokemons/LOAD_FAILURE',

  SEARCH_REQUEST = '@pokemons/SEARCH_REQUEST',
  SEARCH_SUCCESS = '@pokemons/SEARCH_SUCCESS',
  SEARCH_FAILURE = '@pokemons/SEARCH_FAILURE',

  SEARCH_TYPE_REQUEST = '@pokemons/SEARCH_TYPE_REQUEST',
  SEARCH_TYPE_SUCCESS = '@pokemons/SEARCH_TYPE_SUCCESS',
  SEARCH_TYPE_FAILURE = '@pokemons/SEARCH_TYPE_FAILURE',

  CHANGE_LAYOUT = '@pokemons/CHANGE_LAYOUT',
}

export interface PokemonsState {
  readonly data: any;
  readonly loading: boolean;
  readonly error: boolean;
  readonly layout: string;
}
