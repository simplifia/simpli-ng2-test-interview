import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from "./List-Component/list.component";

@NgModule({
  imports: [HomeRoutingModule, SharedModule, BrowserAnimationsModule],
  declarations: [HomeComponent, ListComponent],
  exports: [HomeComponent, ListComponent],
  providers: [NameListService]
})
export class HomeModule { }
