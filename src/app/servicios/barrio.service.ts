import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Barrio } from '../interfaces/barrio';

@Injectable({
  providedIn: 'root'
})
export class BarrioService {

  private endpoint : string = environment.endPoint;
  private apiUrl : string = this.endpoint + "v1/Barrio/"

  constructor(private http:HttpClient) { }

  getList():Observable<Barrio[]>{
    return this.http.get<Barrio[]>(`${this.apiUrl}listarTodos`);
  }
}
