import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { ApiRoadModule } from "./apiroad/apiroad.module";
import { SharedModule } from './shared/shared.module';
import { ResolvingModule } from "./resolving/resolving.module";
import { pokemonListReducer } from "./store/pokemon-list.reducers";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AboutModule,
    HomeModule,
    ApiRoadModule,
    ResolvingModule,
    SharedModule.forRoot(),
    StoreModule.forRoot({pokeList: pokemonListReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 100
    })
    ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
