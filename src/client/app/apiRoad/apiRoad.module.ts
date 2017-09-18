import { NgModule } from '@angular/core';
import { ApiRoadComponent } from './apiRoad.component';
import { ApiRoadRoutingModule } from './apiRoad-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [ApiRoadRoutingModule, SharedModule, BrowserAnimationsModule],
  declarations: [ApiRoadComponent],
  exports: [ApiRoadComponent],
  providers: [  ]
})
export class ApiRoadModule { }
