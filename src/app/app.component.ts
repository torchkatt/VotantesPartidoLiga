import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.cerrarSesion();
  }

  constructor(private router:Router){

  }

public nombreUsuarioLogueado!:string;

  title = 'REGISTRO VOTANTES GIRÓN';

cerrarSesion(){
  this.nombreUsuarioLogueado='';
  this.router.navigate(['login']);
}

}
