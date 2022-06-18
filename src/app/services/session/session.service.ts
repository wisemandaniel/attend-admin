import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  url = environment.baseUrl2;

  constructor(private http: HttpClient) { }

  createSession(data: any) {
    return this.http.post(this.url + 'session', data);
  }
}
