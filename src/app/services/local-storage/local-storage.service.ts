import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private http: HttpClient) { }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  saveUser(user: any) {
    localStorage.setItem('user', user);
  }

  getToken(token: string) {
    localStorage.getItem(token);
  }
}
