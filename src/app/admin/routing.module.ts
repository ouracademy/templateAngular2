
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

import { GuideMapComponent } from './pageComponents/guideMap/index.component';
import { DragAndDropComponent } from './pageComponents/dragDrop/index.component';
import { OtherSamplesComponent } from './pageComponents/otherSamples/index.component';
import { ReportChartsComponent } from './pageComponents/reportCharts/index.component';

export const landingRoutes: Routes = [
  {
    path: 'admin', component: IndexComponent,
    children: [
      { path: '', component: ReportChartsComponent },
      { path: 'guideMap', component: GuideMapComponent },
      { path: 'drag-drop', component: DragAndDropComponent },
      { path: 'other', component: OtherSamplesComponent }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(landingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }

