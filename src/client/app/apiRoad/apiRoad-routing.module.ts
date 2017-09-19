import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiRoadComponent } from './apiRoad.component';
import { ResolveComponent } from './resolve/resolve.component';
import {PokemonResolver} from '../shared/pokemon/pokemon-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'ApiRoad', component: ApiRoadComponent },
      { path: 'resolving', component: ResolveComponent,
        resolve: {
          pokemons: PokemonResolver
        }
      }
    ])
  ],
  exports: [RouterModule],
  providers: [PokemonResolver]
})
export class ApiRoadRoutingModule { }
