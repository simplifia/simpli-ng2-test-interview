import { Component } from '@angular/core';
import { PokemonListService } from "../shared/pokemon-list/pokemon-list.service";
import { Pokemon } from "../shared/pokemon-list/pokemon.model";
import { ActivatedRoute } from "@angular/router";

import 'rxjs/add/operator/pluck';
import { Observable } from "rxjs/Observable";

/**
 * This class represents the lazy loaded ApiRoadComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-resolving',
  template: ` <h2>Testing Resolving</h2>
              <table *ngIf='pokemons'>
                <thead>
                  <tr>
                    <th>Pokemon Names</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let pokemon of pokemons | async">
                    <td> {{ pokemon }}</td>
                  </tr>
                </tbody>
              </table>`
})
export class ResolvingComponent {
  pokemons: Observable<Pokemon[]>;
  errorMessage: string;

  constructor(private pokemonListService:PokemonListService,private route:ActivatedRoute){
    this.pokemons = route.data.pluck('pokemons');
  }

}
