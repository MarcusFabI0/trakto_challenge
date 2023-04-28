import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from '../login/login-form/login-form.component';
import { Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },

];


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class DashboardModule { }
