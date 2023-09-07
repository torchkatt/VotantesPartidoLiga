import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Votante } from '../interfaces/votante';
import { IResponse } from '../interfaces/response.interface';
import { IVotanteFull } from '../interfaces/votantesFull';
import { ModeloVotante } from '../modelos/votante';

const HttpOptions = {
  Headers: new HttpHeaders({'Content-Type':'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class VotanteService {

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "v1/VotantePriv/";
  private apiUrlInsertar:string = this.endpoint + "v1/VotantePublic/";

  constructor(private http:HttpClient) { }

  getListVotantes():Observable<any>{
    return this.http.get<ModeloVotante['contenido']>(`${this.apiUrl}ListarTodos`);
  }

  getVotante(id:number):Observable<IVotanteFull['contenido']>{
    return this.http.post<IVotanteFull['contenido']>(`${this.apiUrl}ListarTodos`,id);
  }

  //Funcionado el de crear!!!
  add(form:Votante):Observable<IResponse>{
      return this.http.post<IResponse>(`${this.apiUrlInsertar}Insertar`,form);
  }

  addVotanteFull(entity:ModeloVotante){
      return this.http.post<IResponse>(`${this.apiUrlInsertar}Insertar`,entity);
  }

  update(idVotante:ModeloVotante, entity:ModeloVotante):Observable<Votante>{
    return this.http.put<Votante>(`${this.apiUrl}Actualizar/${idVotante}`,entity);
  }

  delete(idVotante:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}Eliminar/${idVotante}`);
  }

}
