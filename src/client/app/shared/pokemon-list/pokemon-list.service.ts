import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';  // for debugging
import { Pokemon } from "./pokemon.model";


@Injectable()
/**
 * This class provides the PokemonList service with methods to read pokemonnames.
 */
export class PokemonListService{

  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  get(): Observable<string[]> {
    return this.http.get('http://pokeapi.co/api/v2/pokemon')
                    .map((res: Response) => {
                      let response = res.json();
                      let results = response.results;
                      let pokemonNamesOnly:string[] = [];
                      for (let pokemonData of results){
                        pokemonNamesOnly.push(pokemonData.name);
                      }
                      return pokemonNamesOnly;
                    })
                    // .do((data) => {
                    //   console.log(data);
                    // })  // debug
                    .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {

    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console
    return Observable.throw(errMsg);
  }

}
