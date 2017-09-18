import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ColorListComponent } from './colorList/colorList.component';
import { NameListService } from './name-list/name-list.service';
import { PokemonService } from './pokemon/pokemon.service';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [ToolbarComponent, NavbarComponent, ColorListComponent],
  exports: [ToolbarComponent, NavbarComponent, ColorListComponent,
    CommonModule, FormsModule, RouterModule, MaterialModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService, PokemonService]
    };
  }
}
