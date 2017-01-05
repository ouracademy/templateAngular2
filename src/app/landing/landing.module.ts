import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { RoutingModule } from './routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '@angular/material';
import { ValidationMessagesModule } from 'ng2-custom-validation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, RoutingModule, MaterialModule.forRoot(),
    ValidationMessagesModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LandingComponent, LoginComponent],
  exports: [LandingComponent]
})
export class LandingModule { }
