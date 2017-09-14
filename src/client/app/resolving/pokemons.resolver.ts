import { Observable } from 'rxjs/Observable';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { PokemonListService } from "../shared/pokemon-list/pokemon-list.service";


interface Pokemon {
  name:string;
}

@Injectable()

export class PokemonsResolver implements Resolve<string[]> {

  constructor(private pokemonListService:PokemonListService){}

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) :Observable<string[]> | Promise<string[]> | string[] {
    return this.pokemonListService.get();
  }

}
