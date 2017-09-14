import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../../shared/pokemon-list/pokemon.model";
import * as fromPokemonList from "../../store/pokemon-list.reducers"
import { Store } from "@ngrx/store";

@Component({
  moduleId: module.id,
  selector: 'sd-list',
  template: `<ul>
              <li *ngFor='let member of members'>{{ member }}</li>
            </ul>
            <md-list>
              <md-list-item *ngFor='let pokemon of (pokemonsState | async).pokemons'> {{ pokemon }} </md-list-item>
            </md-list>`,
  styles : [`
    li:first-child{
      color: blue;
    }

    li:nth-child(2){
      color: green;
    }

    li:last-child{
      color: red;
    }`]
})

export class ListComponent implements OnInit {
  members = ['Toto','Titi','Tata'];
  pokemonsState: any;
  pokemons:Pokemon[];

  constructor(private store: Store<fromPokemonList.AppState>){}

  ngOnInit(){
    this.pokemonsState = this.store.select('pokeList');
  }
}
