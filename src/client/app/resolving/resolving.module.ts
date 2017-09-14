import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { ResolvingRoutingModule } from "./resolving-routing.module";
import { ResolvingComponent } from "./resolving.component";
import { PokemonsResolver } from "./pokemons.resolver";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ResolvingRoutingModule],
  providers: [PokemonsResolver],
  declarations: [ResolvingComponent],
  exports: [ResolvingComponent]
})
export class ResolvingModule { }
