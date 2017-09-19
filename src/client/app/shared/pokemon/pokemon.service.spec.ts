import {
  async,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { PokemonService } from './pokemon.service';
import {Pokemon} from './pokemon';
import {Http, Response} from '@angular/http';

export function main() {
  describe('Pokemon service', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [],
        declarations: [PokemonService],
        providers: [

        ]
      });

    });

    it('test get',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {

          })
      })
    );


  });
}
