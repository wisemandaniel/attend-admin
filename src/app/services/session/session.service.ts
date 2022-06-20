import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createSession(data: any, courseId: string) {
    return this.http.post(this.url + 'public/course/sessions', data, {params:{courseId}});
  }

  getSessions() {
    return this.http.get(this.url + 'public/course/sessions');
  }

  deleteSession(sessionId: string) {
    return this.http.delete(this.url + 'public/course/sessions', {params:{sessionId}})
  }
}
