import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { List } from 'immutable';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { ApiRoadModule } from './apiRoad/apiRoad.module';
import { SharedModule } from './shared/shared.module';

import {
  Action,
  ActionReducerMap
} from '@ngrx/store';


export interface State {
  pokeList: List<object>;
}

const initialState: State = {
  pokeList: List([{
    name: 'pokename1'
  }])
};

export const ADD_POKELIST = '[poke] add-pokelist'

export class AddPokeList implements Action {
  readonly type = ADD_POKELIST;
  constructor(private payload?: any) {
    payload ? this.payload = payload : this.payload = {};
  }
}

function reducer(state = initialState, action: any): State {
  switch (action.type) {
    case ADD_POKELIST:
      return {
        pokeList: action.payload.list
      };
    default:
      return state;
  }
}

export const config: any = {
  initialState: {
    poke: initialState
  }
};

export const reducers: ActionReducerMap<any, any> = {
  poke: reducer
};

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AboutModule,
    ApiRoadModule,
    HomeModule,
    SharedModule.forRoot(),
    StoreModule.forRoot(reducers, config),
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
