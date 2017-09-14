import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiRoadRoutingModule } from "./apiroad-routing.module";
import { ApiRoadComponent } from "./apiroad.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ApiRoadRoutingModule],
  declarations: [ApiRoadComponent],
  exports: [ApiRoadComponent]
})
export class ApiRoadModule { }
