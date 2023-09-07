import { Component, Input, Inject, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Barrio } from 'src/app/interfaces/barrio';
import { BarrioService } from 'src/app/servicios/barrio.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Votante } from 'src/app/interfaces/votante';
import { VotanteService } from 'src/app/servicios/votante.service';
import { FormFullCrearVotanteComponent } from '../form-full-crear-votante/form-full-crear-votante.component';
import { MatDialog } from '@angular/material/dialog';
import { IVotanteFull } from 'src/app/interfaces/votantesFull';
import { IValidarUsuario } from 'src/app/interfaces/validarUsuario';
import { Token } from '@angular/compiler';
import { ModeloVotante } from 'src/app/modelos/votante';

@Component({
  selector: 'app-votante',
  templateUrl: './votante.component.html',
  styleUrls: ['./votante.component.css']
})
export class VotanteComponent implements OnInit, AfterViewInit {

  votantes!: ModeloVotante[];


  displayedColumns: string[] = ['id','nombreCompleto', 'cedula', 'sexo', 'edad','celular', 'direccion', 'nombreBarrio', 'afichesCasa','afichesCarro','afichesMoto','visitado', 'Acciones'];
  dataSourceVotantes = new MatTableDataSource<IVotanteFull>();

  public ListaBarrios:Barrio['contenido'];

  public datosBarrios:Barrio['contenido'] = [];
  router: any;
  api: any;

  constructor(private _barrioServicio: BarrioService, private _votanteServicio: VotanteService){}

   dataSourceListaBarrios = new MatTableDataSource<any>();

   ngOnInit():void{
    this.mostrarBarrios();
    this.mostrarVotantes();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceVotantes.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSourceVotantes.paginator = this.paginator;
  }

  mostrasListaVotantes(){
    this._votanteServicio.getListVotantes().subscribe(
      next => this.votantes = next
    )
  }

  borrarVotante(id:number){
    if(confirm('Desea borrar este votante?')){
      this._votanteServicio.delete(id).subscribe(
        () => this.votantes = this.votantes.filter(f => f.id != id)
      )
    }
  }

  mostrarVotantes(){
    this._votanteServicio.getListVotantes().subscribe({
      next:(data)=>{
        let datosVotantes:IVotanteFull['contenido'] = data;
        console.log(data)
        this.dataSourceVotantes.data = datosVotantes.contenido;
      },error:(e)=>{}
    })
  }

  mostrarBarrios(){
    let listaaaa:string[] = [];
    this._barrioServicio.getList().subscribe({
      next:(data)=>{
        this.datosBarrios = data;
        this.ListaBarrios = this.datosBarrios.contenido;
        this.dataSourceListaBarrios.data = this.datosBarrios.contenido;
        let filatemp;
        for (let index = 0; index < this.dataSourceListaBarrios.data.length; index++) {
          filatemp = this.datosBarrios.contenido[index].nombre;
          listaaaa.push(filatemp);
        }
        //console.log(listaaaa);
      },error:(e)=>{}
    })
  }





}
