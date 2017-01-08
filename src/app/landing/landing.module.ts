import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,RoutingModule, MaterialModule.forRoot()
  ],
  declarations: [LandingComponent, LoginComponent],
  exports: [LandingComponent]
})
export class LandingModule { }
