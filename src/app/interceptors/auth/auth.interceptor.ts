import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  addToken(req: HttpRequest<any>): HttpRequest<any> {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      return req.clone({
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
      });
    } else {
      return req;
    }
  }


  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addToken(req));
  }
}
