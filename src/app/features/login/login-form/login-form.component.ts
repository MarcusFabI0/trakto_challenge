import { IloginRequest } from './../../../shared/interfaces/api.interface';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/shared/interfaces/loginResponse.interface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';
  token: string = '';
  error?: string;
  buttonLoading = false;

constructor(private router: Router, private apiService: ApiService) {}

  login() {
    this.buttonLoading = true;
    return this.apiService
      .userLogin({ email: this.email, password: this.password })
      .subscribe({
        next: (res:LoginResponse) => {
          localStorage.setItem('@ACCESS_TOKEN', res.access_token)

        },
        error: ({ error }) => {
          this.error = '*Credenciais inválidas';
          this.buttonLoading = false;
        },
        complete: () => {
          this.router.navigateByUrl('/dashboard');
        },
      });
  }
}
