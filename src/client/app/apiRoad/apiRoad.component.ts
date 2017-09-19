import { Component, OnInit } from '@angular/core';

import { MdButtonModule } from '@angular/material';

import { Store, ActionReducer, Action } from '@ngrx/store';

import { PokemonService } from '../shared/pokemon/pokemon.service';
import {Pokemon} from '../shared/pokemon/pokemon';
import {ADD_POKELIST} from '../app.module';

/**
 * apiRoad component
 */
@Component({
  moduleId: module.id,
  selector: 'sd-apiRoad',
  templateUrl: 'apiRoad.component.html',
  styleUrls: ['apiRoad.component.css'],
})
export class ApiRoadComponent {

  loadingPokemon = false;
  pokemons: Pokemon[] = [];
  constructor(
    public pokemonService: PokemonService,
    public store: Store<any>
  ) {
    this.poke = store.select('poke');
  }

  showPokemon(): void {
    this.loadingPokemon = true;
    this.pokemonService.get().subscribe((list) => {
      this.loadingPokemon = false;
      if(list){
        this.pokemons = list.results.slice();
        this.storePokemon(this.pokemons);
      }
    });
  }

  storePokemon(list): void {
    this.store.dispatch({type: ADD_POKELIST, action: {payload: list}});
  }

}
