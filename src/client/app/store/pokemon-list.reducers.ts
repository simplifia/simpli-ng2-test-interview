import * as PokemonListActions from "./pokemon-list.actions";

export interface AppState {
  pokeList: State
}

export interface State {
  pokemons: String[];
}

const initialState: State = {
  pokemons: ['pokename1']
};

export function pokemonListReducer(state = initialState, action:PokemonListActions.PokemonListActions){
  switch(action.type) {

    case PokemonListActions.ADD_POKEMONS:
      return {
        ...state,
        pokemons:[...action.payload]
      };

    default:
      return state;
  }
}
