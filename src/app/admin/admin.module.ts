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
import { ReaderFileComponent } from './readerFile/index.component';
import { AgileBoardComponent } from './agile_board/index.component';
import { ClockComponent } from './clock/index.component';
import { SecuencyImageComponent } from './secuencyImage/index.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
@NgModule({
  imports: [
    CommonModule, MaterialModule.forRoot(), FormsModule, RoutingModule, ChartCustomModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8NAE6pJv8THMXrIBusSXIYesDDkQJILU'
    }),
    DndModule.forRoot()
  ],
  declarations: [IndexComponent, MapComponent, ShopCartComponent,
    AgileBoardComponent, ReaderFileComponent,ClockComponent,
    SecuencyImageComponent,
    GeolocationComponent]
})
export class AdminModule { }
