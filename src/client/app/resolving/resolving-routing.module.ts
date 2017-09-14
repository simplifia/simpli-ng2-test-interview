import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResolvingComponent } from "./resolving.component";
import { PokemonsResolver } from "./pokemons.resolver";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'resolving', component: ResolvingComponent, resolve: {pokemons:PokemonsResolver} }
    ])
  ],
  exports: [RouterModule]
})
export class ResolvingRoutingModule { }
