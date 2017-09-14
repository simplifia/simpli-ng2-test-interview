import { Component } from '@angular/core';
import { Store } from "@ngrx/store";

import { PokemonListService } from "../shared/pokemon-list/pokemon-list.service";
import { Pokemon } from "../shared/pokemon-list/pokemon.model";
import * as fromPokemonList from "../store/pokemon-list.reducers";
import * as PokemonListActions from "../store/pokemon-list.actions";


/**
 * This class represents the lazy loaded ApiRoadComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-apiroad',
  template: ` <h2>Testing API Road</h2>
              <button md-raised-button (click)='getPokemons()'>Fetch Pokemons!</button>
              <table *ngIf='pokemons'>
                <thead>
                  <tr>
                    <th>Pokemon Names</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let pokemon of pokemons">
                    <td> {{ pokemon }}</td>
                  </tr>
                </tbody>
              </table>`
})
export class ApiRoadComponent {
  pokemons: string[];
  errorMessage: string;

  constructor(private pokemonListService:PokemonListService, private store: Store<fromPokemonList.AppState>){}

  getPokemons(){
    return this.pokemonListService.get()
      .subscribe(
        (pokemonNames:string[])=>{
          this.pokemons = pokemonNames;
          this.store.dispatch(new PokemonListActions.AddPokemons(pokemonNames));
        },
        error => this.errorMessage = <any>error
      );
  }
}
