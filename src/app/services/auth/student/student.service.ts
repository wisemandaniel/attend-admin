import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = environment.baseUrl

  constructor(private http: HttpClient) { }

  getAllStudent() {
    return this.http.get(this.url + 'protected/students/?pageNumber=0&pageSize=5');
  }

}