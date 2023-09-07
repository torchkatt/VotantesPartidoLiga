import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Votante } from 'src/app/interfaces/votante';
import { VotanteService } from 'src/app/servicios/votante.service';

@Component({
  selector: 'app-votantes',
  templateUrl: './votantes.component.html',
  styleUrls: ['./votantes.component.css'],
})
export class VotantesComponent implements AfterViewInit, OnInit{

  displayedColumns: string[] = ['nombreCompleto', 'cedula', 'celular', 'direccion', 'nombreBarrio', 'Acciones'];
  dataSource = new MatTableDataSource<Votante>();

  constructor(private _votanteServicio: VotanteService){

  }

  ngOnInit():void{
    //this.mostrarVotantes();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //mostrarVotantes(){
  //  this._votanteServicio.getList().subscribe({
  //    next:(data)=>{
  //      console.log(data)
  //      this.dataSource.data = data;
  //    },error:(e)=>{}
  //  })
  //}
}
