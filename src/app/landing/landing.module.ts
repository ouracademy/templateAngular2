import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,RoutingModule,MaterialModule.forRoot()
  ],
  declarations: [LandingComponent, LoginComponent],
  exports : [LandingComponent]
})
export class LandingModule { }
