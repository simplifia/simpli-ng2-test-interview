import { Component, OnInit } from '@angular/core';

import { MdButtonModule } from '@angular/material';

import { PokemonService } from '../shared/pokemon/pokemon.service';
import {Pokemon} from '../shared/pokemon/pokemon';

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
    public pokemonService: PokemonService
  ) {}

  showPokemon(): void {
    this.loadingPokemon = true;
    this.pokemonService.get().subscribe((list) => {
      this.loadingPokemon = false;
      if(list){
        this.pokemons = list.results.slice();
      }
    });
  }

}
