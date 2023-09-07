import { FormControl } from '@angular/forms';
import { IUsuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['nombre','usuario','telefono','email','rol','fech_cre','activo','Acciones'];
  dataSourceUsuarios = new MatTableDataSource<IUsuario>();

  public ListaUsuarios:IUsuario['contenido'];
  public datosUsuarios:IUsuario['contenido'] = [];

  constructor(private _usuarioServicio: UsuarioService){

  }
  ngAfterViewInit(): void {
    
  }

  dataSourceListaUsuarios = new MatTableDataSource<any>();

   ngOnInit():void{
    this.mostrarUsuarios();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceUsuarios.filter = filterValue.trim().toLowerCase();
  }

   mostrarUsuarios(){
    let listaaaa:string[] = [];
    this._usuarioServicio.getList().subscribe({
      next:(data)=>{
        this.datosUsuarios = data;
        this.ListaUsuarios = this.datosUsuarios.contenido;
        this.dataSourceListaUsuarios.data = this.datosUsuarios.contenido;
        let filatemp;
        for (let index = 0; index < this.dataSourceListaUsuarios.data.length; index++) {
          filatemp = this.datosUsuarios.contenido[index].nombre;
          listaaaa.push(filatemp);
        }
        //console.log(listaaaa);
      },error:(e)=>{}
    })

  }
}
