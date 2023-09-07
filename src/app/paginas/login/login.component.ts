import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from "@angular/router";
import { NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api.service';
import { Ilogin } from 'src/app/interfaces/login.interface';
import { IResponse } from 'src/app/interfaces/response.interface';
import { AppComponent } from 'src/app/app.component';
import { BugService } from 'src/app/compartido/bug.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    usuario  : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor(
    private api:ApiService,
    private router:Router,
    private nombreUsuario:AppComponent
    ) {}

  errorStatus:boolean = false;
  errorMsj:any = "";
  codeEstatus!:number;

  ngOnInit():void{

  }

  onLogin(form:any){
    this.api.loginByEmail(form).subscribe(data =>{
      let dataResponse:IResponse = data;
      if(dataResponse.message == "OK"){
        localStorage.setItem("token", dataResponse.contenido.token);
        this.router.navigate(['dashboard']);
        this.nombreUsuario.nombreUsuarioLogueado = form.usuario;
      }else{
        this.errorStatus = true;
        this.errorMsj = dataResponse.details.message;
        this.codeEstatus = dataResponse.status;
      }
    });
  }


/*
login() {
  const user = { usuario: this.api.usuario, password: this.password};
    this.api.loginByEmail(user).subscribe(data => {
    this.api.loginByEmail(data.token);
    this.router.navigateByUrl("/");
    console.log(data);
  });
}
*/


}
