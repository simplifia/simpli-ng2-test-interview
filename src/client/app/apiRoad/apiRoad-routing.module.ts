import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiRoadComponent } from './apiRoad.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'ApiRoad', component: ApiRoadComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ApiRoadRoutingModule { }
