import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RoutingModule } from './routing.module';
import { ChartCustomModule } from '../shared/charts/charts.module';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { DndModule } from 'ng2-dnd';
import { IndexComponent } from './index/index.component';
import { MapComponent } from './map/index.component';
import { ShopCartComponent } from './shopCart/index.component';
import { AgileBoardComponent } from './agile_board/index.component';

@NgModule({
  imports: [
    CommonModule, MaterialModule.forRoot(),FormsModule, RoutingModule, ChartCustomModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8NAE6pJv8THMXrIBusSXIYesDDkQJILU'
    }),
    DndModule.forRoot()
  ],
  declarations: [IndexComponent, MapComponent,ShopCartComponent,AgileBoardComponent]
})
export class AdminModule { }
