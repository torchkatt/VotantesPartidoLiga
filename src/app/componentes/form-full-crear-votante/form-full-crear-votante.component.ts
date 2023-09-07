import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Barrio } from 'src/app/interfaces/barrio';
import { BarrioService } from 'src/app/servicios/barrio.service';

@Component({
  selector: 'app-form-full-crear-votante',
  templateUrl: './form-full-crear-votante.component.html',
  styleUrls: ['./form-full-crear-votante.component.css']
})
export class FormFullCrearVotanteComponent implements OnInit{


  public dataSourceListBarrios = new MatTableDataSource<Barrio>();

  public ListaBarrios:Barrio['contenido'];

   constructor(public _barrioServicio: BarrioService, public VotanteForm: FormBuilder){

  }
  PrimerNombre = new FormControl<string>('', [Validators.required, Validators.minLength(20)]);
  SegundoNombre = new FormControl<string>('', [Validators.required, Validators.minLength(20)]);
  PrimerApellido = new FormControl<string>('', [Validators.required, Validators.minLength(20)]);
  SegundoApellido = new FormControl<string>('', [Validators.required, Validators.minLength(20)]);
  cedula = new FormControl<string>('', [Validators.required, Validators.minLength(7)]);
  telefono = new FormControl<string>('', [Validators.required, Validators.minLength(7)]);
  direccion = new FormControl<string>('', [Validators.required, Validators.minLength(10)]);
  afichesCasa = new FormControl<string>('', [Validators.required, Validators.minLength(10)]);
  afichesCarro = new FormControl<string>('', [Validators.required, Validators.minLength(10)]);
  afichesMoto = new FormControl<string>('', [Validators.required, Validators.minLength(10)]);

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
    console.log("ngAfterViewInit");
  }
   dataSourceListaBarrios = new MatTableDataSource<any>();

}
