import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IloginRequest } from '../interfaces/api.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  userLogin(data: IloginRequest) : Observable<any> {
    return this.http.post("https://api.trakto.io/auth/signin", data)
  }
}
