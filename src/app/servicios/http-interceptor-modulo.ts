import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor{

  constructor(){}

  intercept(request: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {

    let cloneRequest = request;

    if(localStorage.getItem('token')){
      /* cloneRequest = request.clone({ headers: {
         Authorization: localStorage.getItem('token')!
       }
      }) */
    }
    return next.handle(cloneRequest);
  }
}
 
export class HttpInterceptorModulo{}
