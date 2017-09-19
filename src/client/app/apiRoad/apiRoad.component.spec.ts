import {
  async,
  TestBed
} from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { ApiRoadComponent } from './apiRoad.component';
import { PokemonService } from '../shared/pokemon/pokemon.service';

export function main() {
  describe('ApiRoad component', () => {

    beforeEach(() => {

      TestBed.configureTestingModule({
        imports: [PokemonService],
        declarations: [ApiRoadComponent],
        providers: [

        ]
      });

    });

    it('test local scope',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(ApiRoadComponent);
            let apiRoadInstance = fixture.debugElement.componentInstance;
            let apiRoadDOMEl = fixture.debugElement.nativeElement;
            let mockPokemonService =
              fixture.debugElement.injector.get<any>(PokemonService) as MockPokemonService;

            expect(apiRoadInstance.loadingPokemon).toEqual(false);
            expect(apiRoadInstance.pokemons).toEqual([]);

            expect(apiRoadInstance.pokemonService).toEqual(jasmine.any(MockPokemonService));
            expect(apiRoadInstance.showPokemon).toEqual(jasmine.any(Function));


            fixture.detectChanges();

          })
      })
    );

    it('test showPokemon',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(ApiRoadComponent);
            let apiRoadInstance = fixture.debugElement.componentInstance;
            let apiRoadDOMEl = fixture.debugElement.nativeElement;
            let mockPokemonService =
              fixture.debugElement.injector.get<any>(PokemonService) as MockPokemonService;
            let pokemonServiceSpy = spyOn(mockPokemonService, 'get').and.callThrough();

            mockPokemonService.returnValue = [{name: "a", url: ''}, {name: "b", url: ''}, {name: "c", url: ''}];

            expect(apiRoadInstance.pokemonService).toEqual(jasmine.any(MockPokemonService));

            // test view init state
            expect(apiRoadDOMEl.querySelectorAll('button').length).toEqual(1);
            expect(apiRoadDOMEl.querySelectorAll('md-spinner').length).toEqual(0);
            expect(apiRoadDOMEl.querySelectorAll('table').length).toEqual(0);

            expect(pokemonServiceSpy.calls.count()).toBe(0);

            apiRoadInstance.showPokemon();

            fixture.detectChanges();

            // test new view state
            expect(apiRoadDOMEl.querySelectorAll('button').length).toEqual(0);
            expect(apiRoadDOMEl.querySelectorAll('md-spinner').length).toEqual(1);
            expect(apiRoadDOMEl.querySelectorAll('table').length).toEqual(1);

            // spy call
            expect(pokemonServiceSpy.calls.count()).toBe(1);

            // scope state
            expect(apiRoadInstance.pokemons.length).toEqual(mockPokemonService.returnValue.length);
          });

      }));
  });
}

class MockPokemonService {

  returnValue: string[];

  get(): Observable<any[]> {
    return Observable.create((observer: any) => {
      observer.next(this.returnValue);
      observer.complete();
    });
  }
}
