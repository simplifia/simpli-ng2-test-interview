import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiRoadRoutingModule } from './apiRoad-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ApiRoadComponent } from './apiRoad.component';

import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, HttpModule, ApiRoadRoutingModule, SharedModule, BrowserAnimationsModule, MaterialModule],
  declarations: [ApiRoadComponent],
  exports: [ApiRoadComponent, MaterialModule],
  providers: [  ]
})
export class ApiRoadModule { }
