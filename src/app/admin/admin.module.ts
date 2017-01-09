import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RoutingModule } from './routing.module';
import { ChartCustomModule } from '../shared/charts/charts.module';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { IndexComponent } from './index/index.component';
import { MapComponent } from './map/index.component';

@NgModule({
  imports: [
    CommonModule,MaterialModule.forRoot(),RoutingModule, ChartCustomModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8NAE6pJv8THMXrIBusSXIYesDDkQJILU'
    })
  ],
  declarations: [IndexComponent,MapComponent]
})
export class AdminModule { }
