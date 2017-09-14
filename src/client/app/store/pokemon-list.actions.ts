import { Action } from "@ngrx/store";

export const ADD_POKEMONS = 'ADD_POKEMONS';


export class AddPokemons implements Action {
  readonly type = ADD_POKEMONS;

  constructor(public payload:string[]){}
}

export type PokemonListActions = AddPokemons ;
