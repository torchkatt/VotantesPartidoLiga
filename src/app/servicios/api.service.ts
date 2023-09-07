import { Injectable } from '@angular/core';
import { Ilogin } from '../interfaces/login.interface';
import { IResponse } from '../interfaces/response.interface';
import { BarrioService } from './barrio.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Barrio } from '../interfaces/barrio';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = environment.endPoint;


  constructor(private http: HttpClient) { }

  loginByEmail(form:Ilogin):Observable<IResponse>{
    let apiUrlLogin = this.url + "v1/Autenticacion/login/";
    return this.http.post<IResponse>(apiUrlLogin,form);
  }


}
