import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiRoadComponent } from "./apiroad.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'apiroad', component: ApiRoadComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ApiRoadRoutingModule { }
