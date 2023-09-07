import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Barrio } from 'src/app/interfaces/barrio';
import { BarrioService } from 'src/app/servicios/barrio.service';

@Component({
  selector: 'app-barrio',
  templateUrl: './barrio.component.html',
  styleUrls: ['./barrio.component.css']
})
export class BarrioComponent implements AfterViewInit, OnInit{

  displayedColumns: string[] = ['nombre', 'activo', 'Acciones'];
  dataSourceBarrios = new MatTableDataSource<Barrio>();

  constructor(private _barrioServicio: BarrioService){

  }

  ngOnInit():void{
    this.mostrarBarrios();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceBarrios.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSourceBarrios.paginator = this.paginator;
  }

  mostrarBarrios(){
    this._barrioServicio.getList().subscribe({
      next:(data)=>{
        let datosBarrios:Barrio['contenido'] = data;
        this.dataSourceBarrios.data = datosBarrios.contenido;
      },error:(e)=>{}
    })
  }
}
