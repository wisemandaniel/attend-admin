import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  register(user: any) {
    return this.http.post(this.url + 'public/auth/register-lecturer', user);
  }
  
  login(user: any) {
    return this.http.post(this.url + 'public/auth/login', user);
  }
}
