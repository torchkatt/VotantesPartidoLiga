import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";

import { IResponse } from '../interfaces/response.interface';
import { IUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private endpoint : string = environment.endPoint;
  private apiUrl : string = this.endpoint + "v1/Autenticacion/"
  private apiUrlUsuario : string = this.endpoint + "v1/Usuario/"

  constructor(private http:HttpClient, private cookies: CookieService) { }

  login(user:any): Observable<any> {
    return this.http.post(`${this.apiUrl}login`, user);
  }

  register(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

  getUser() {
    return this.http.get("https://reqres.in/api/users/2");
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }
  getList():Observable<IUsuario[]>{
    return this.http.get<IUsuario[]>(`${this.apiUrlUsuario}listarTodos`);
  }

}
