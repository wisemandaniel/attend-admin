import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  createCours(data: any) {
    return this.http.post(this.url + 'protected/courses', data);
  }

  getCourses() {
    return this.http.get(this.url + 'protected/courses');
  }
}
