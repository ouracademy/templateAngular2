import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { RoutingModule } from './routing.module';
@NgModule({
  imports: [
    CommonModule,RoutingModule
  ],
  declarations: [LandingComponent],
  exports : [LandingComponent]
})
export class LandingModule { }
