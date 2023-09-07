import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Barrio } from 'src/app/interfaces/barrio';
import { BarrioService } from 'src/app/servicios/barrio.service';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { AppComponent } from 'src/app/app.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VotanteService } from 'src/app/servicios/votante.service';
import { IResponse } from 'src/app/interfaces/response.interface';
import { MatPaginator } from '@angular/material/paginator';
import { Votante } from 'src/app/interfaces/votante';

@Component({
  selector: 'app-formulario-votante',
  templateUrl: './formulario-votante.component.html',
  styleUrls: ['./formulario-votante.component.css']
})

export class FormularioVotanteComponent implements  OnInit{


  public dataSourceListBarrios = new MatTableDataSource<Barrio>();

  public ListaBarrios:Barrio['contenido'];

   constructor(public _barrioServicio: BarrioService, public VotanteForm: FormBuilder,private api:VotanteService, private router:Router){

  }
  insertarForm = new FormGroup({
      NombreCompleto: new FormControl<string>('', [Validators.required, Validators.minLength(10)]),
      Cedula: new FormControl<string>('', [Validators.required, Validators.minLength(7)]),
      Celular: new FormControl<string>('', [Validators.required, Validators.minLength(7)]),
      Direccion: new FormControl<string>('', [Validators.required, Validators.minLength(10)]),
      IdBarrio: new FormControl<any>(null),
      Nombre1: new FormControl<any>(null),
      Nombre2: new FormControl<any>(null),
      Apellido1: new FormControl<any>(null),
      Apellido2: new FormControl<any>(null),
      IdSexo: new FormControl<any>(null),
      Edad: new FormControl<any>(null),
      CantAfichesCasa: new FormControl<any>(null),
      CantAfichesCarro: new FormControl<any>(null),
      CantAfichesMoto: new FormControl<any>(null),
      IdUsuarioCreacion: new FormControl<any>(null)
  });

  errorStatus:boolean = false;
  errorMsj:any = "";
  codeEstatus!:number;

    ngOnInit(): void {
      this.mostrarBarrios();
    }

    mostrarBarrios(){
    this._barrioServicio.getList().subscribe({
      next:(data)=>{
        let datosBarrios:Barrio['contenido'] = data;
        this.ListaBarrios = datosBarrios.contenido;
        this.dataSourceListBarrios.data = datosBarrios.contenido;
      },error:(e)=>{}
    })
  }

  public datosBarrios:Barrio['contenido'] = [];

  ngAfterViewInit(): void {
  }
   dataSourceListaBarrios = new MatTableDataSource<any>();

   checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  }

  public resultado!: string;

  insertarVotante(form:any){

  if((this.insertarForm.controls.NombreCompleto.value?.length == 0
      && this.insertarForm.controls.Cedula.value?.length == 0
      && this.insertarForm.controls.Celular.value?.length == 0
      && this.insertarForm.controls.Direccion.value?.length == 0
      && this.insertarForm.controls.IdBarrio.value?.value == null)){

        this.codeEstatus = 0;
        this.insertarForm.reset();

        this.router.navigate(['contacto']);
    }
    else{
      this.codeEstatus=-1;

      this.api.add(form).subscribe(data =>{

        let dataResponse:IResponse = data;

        if(dataResponse.message != "OK"){
          this.codeEstatus = 2;
          this.router.navigate(['']);
          this.insertarForm.reset();
        }
        else{
          this.codeEstatus = 1;
          this.router.navigate(['contacto']);
          this.insertarForm.reset();
        }
      });
    }
  }

  

}
