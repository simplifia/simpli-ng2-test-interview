import { Observable } from 'rxjs/Observable';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { PokemonListService } from "../shared/pokemon-list/pokemon-list.service";


interface Pokemon {
  name:string;
}

@Injectable()

export class PokemonsResolver implements Resolve<Pokemon[]> {

  constructor(private pokemonListService:PokemonListService){}

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) :Observable<Pokemon[]> | Promise<Pokemon[]> | Pokemon[] {
    return this.pokemonListService.get();
  }

}
