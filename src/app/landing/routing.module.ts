
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
export const landingRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'auth/login', component: LoginComponent }
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

