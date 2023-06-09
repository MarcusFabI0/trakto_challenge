import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule
  ]
})
export class LoginModule { }
