import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';

import { ApiRoadComponent } from './apiroad.component';
import { PokemonListService } from "../shared/pokemon-list/pokemon-list.service";
import { Observable } from "rxjs/Observable";

export function main() {
  describe('ApiRoadComponent', () => {
    let nameListService: PokemonListService;
    let mockBackend: MockBackend;

    beforeEach(()=>{
      TestBed.configureTestingModule({
        providers: [
          PokemonListService,
          MockBackend,
          BaseRequestOptions,
          {
            provide: Http,
            useFactory: (backend: ConnectionBackend, options: BaseRequestOptions) => new Http(backend, options),
            deps: [MockBackend, BaseRequestOptions]
          }
      ],
        declarations:[ApiRoadComponent]
      });
    })

    it('should create the app', ()=>{
      let fixture = TestBed.createComponent(ApiRoadComponent);
      let app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });

    it('should display the h2 tag with testing app road', ()=>{
      let fixture = TestBed.createComponent(ApiRoadComponent);
      let app = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h2').textContent).toContain('Testing API Road');
    });

    it('should display the button with testContent', ()=>{
      let fixture = TestBed.createComponent(ApiRoadComponent);
      let app = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('button').textContent).toContain('Fetch Pokemons!');
    });

    it('should return an Observable when get called', async(() => {
      expect(TestBed.get(PokemonListService).get()).toEqual(jasmine.any(Observable));
    }));

    it('should resolve to list of names when get called', async(() => {
      let pokemonListService = TestBed.get(PokemonListService);
      let mockBackend = TestBed.get(MockBackend);

      mockBackend.connections.subscribe((c: any) => {
        c.mockRespond(new Response(new ResponseOptions({ body: '["Dijkstra", "Hopper"]' })));
      });

      pokemonListService.get().subscribe((data: any) => {
        expect(data).toEqual(['Dijkstra', 'Hopper']);
      });
    }));

  });
}
