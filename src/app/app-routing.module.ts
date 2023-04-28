import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginFormComponent } from './features/login/login-form/login-form.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  {
    path:'',
    component:LoginFormComponent,
  },
  {
    path:'login',
    component:LoginFormComponent,
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate: [AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
