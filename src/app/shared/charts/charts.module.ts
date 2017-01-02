import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { RandomComponent } from './random/random.component';
@NgModule({
  imports: [
    CommonModule,ChartsModule
  ],
  declarations: [DoughnutComponent, RandomComponent],
  exports:[DoughnutComponent,RandomComponent]
})
export class ChartCustomModule { }
