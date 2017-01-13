import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RoutingModule } from './routing.module';
import { ChartCustomModule } from '../shared/charts/charts.module';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { DndModule } from 'ng2-dnd';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { IndexComponent } from './index/index.component';

import { MapComponent } from './components/map/index.component';
import { ShopCartComponent } from './components/shopCart/index.component';
import { ReaderFileComponent } from './components/readerFile/index.component';
import { AgileBoardComponent } from './components/agile_board/index.component';
import { ClockComponent } from './components/clock/index.component';
import { SecuencyImageComponent } from './components/secuencyImage/index.component';
import { GeolocationComponent } from './components/geolocation/geolocation.component';

import { GuideMapComponent } from './pageComponents/guideMap/index.component';
import { DragAndDropComponent } from './pageComponents/dragDrop/index.component';
import { OtherSamplesComponent } from './pageComponents/otherSamples/index.component';
import { ReportChartsComponent } from './pageComponents/reportCharts/index.component';
export const firebaseConfig = {
  apiKey: "AIzaSyC2VyvdslE3c-3As0ThAjcnVfhxjYwwy3o",
  authDomain: "guidetravel-bd8a5.firebaseapp.com",
  databaseURL: "https://guidetravel-bd8a5.firebaseio.com",
  storageBucket: "guidetravel-bd8a5.appspot.com",
  messagingSenderId: "410800102412"
};
const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  imports: [
    CommonModule, MaterialModule.forRoot(), FormsModule, RoutingModule, ChartCustomModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB8NAE6pJv8THMXrIBusSXIYesDDkQJILU'
    }),
    DndModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig)
  ],
  declarations: [IndexComponent, MapComponent, ShopCartComponent,
    AgileBoardComponent, ReaderFileComponent, ClockComponent,
    SecuencyImageComponent, GeolocationComponent,
    GuideMapComponent,
    DragAndDropComponent,
    OtherSamplesComponent,
    ReportChartsComponent]
})
export class AdminModule { }
