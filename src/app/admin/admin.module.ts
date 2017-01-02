import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { IndexComponent } from './index/index.component';
import { RoutingModule } from './routing.module';
import { ChartCustomModule } from '../shared/charts/charts.module';


@NgModule({
  imports: [
    CommonModule,MaterialModule.forRoot(),RoutingModule, ChartCustomModule
  ],
  declarations: [IndexComponent]
})
export class AdminModule { }
