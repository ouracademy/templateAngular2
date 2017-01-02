import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { IndexComponent } from './index/index.component';
import { RoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,MaterialModule.forRoot(),RoutingModule
  ],
  declarations: [IndexComponent]
})
export class AdminModule { }
