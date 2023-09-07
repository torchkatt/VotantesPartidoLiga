import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightgalleryModule } from 'lightgallery/angular';
//------
// Páginas
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { EnfoquesComponent } from './paginas/enfoques/enfoques.component';
import { FormularioUsuariosComponent } from './paginas/formulario-usuarios/formulario-usuarios.component';
import { FormularioVotantesComponent } from './paginas/formulario-votantes/formulario-votantes.component';
import { GaleriaPageComponent } from './paginas/galeria/galeria.component';
import { LoginPageComponent } from './paginas/login/login.component';
import { PresentacionComponent } from './paginas/presentacion/presentacion.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { VotantesComponent } from './paginas/votantes/votantes.component';
import { FormularioCrearVotantesComponent } from './paginas/formulario-crear-votantes/formulario-crear-votantes.component'
// Componentes
import { BarrioComponent } from './componentes/barrio/barrio.component';
import { FormularioVotanteComponent } from './componentes/formulario-votante/formulario-votante.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { VotanteComponent } from './componentes/votante/votante.component';
import { FormFullCrearVotanteComponent }  from './componentes/form-full-crear-votante/form-full-crear-votante.component';
import { LoaderComponent } from './componentes/loader/loader.component';
//------
import { BugService } from './compartido/bug.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpInterceptorModulo } from './servicios/http-interceptor-modulo';
import { Bug } from './modelos/bug';

const routes: Route[] = [
  { path: '',             component: PresentacionComponent },
  { path: 'presentacion', component: PresentacionComponent },//, pathMatch: 'full'
  { path: 'enfoques',     component: EnfoquesComponent },
  { path: 'galeria',      component: GaleriaPageComponent },
  { path: 'contacto',     component: ContactoComponent },
  { path: 'login',        component: LoginPageComponent },
  { path: 'usuarios',     component: UsuariosComponent },
  { path: 'votantes',     component: VotantesComponent },
  { path: 'form-usuario', component: FormularioUsuariosComponent },
  { path: 'form-votante', component: FormularioVotantesComponent },
  { path: 'form-votantes',component: FormularioCrearVotantesComponent },
  { path: 'dashboard',    component: DashboardComponent }
]

@NgModule({

  imports:[
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    LightgalleryModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    PresentacionComponent,
    EnfoquesComponent,
    GaleriaComponent,
    ContactoComponent,
    UsuariosComponent,
    VotantesComponent,
    GaleriaPageComponent,
    LoginPageComponent,
    FormularioUsuariosComponent,
    FormularioVotantesComponent,
    DashboardComponent,
    UsuarioComponent,
    VotanteComponent,
    BarrioComponent,
    FormularioVotanteComponent,
    FormFullCrearVotanteComponent,
    FormularioCrearVotantesComponent,
    LoaderComponent
  ],
  providers: [
    BugService,
    /* {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorModulo,
      multi: true
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
