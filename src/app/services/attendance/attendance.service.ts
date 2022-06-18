import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAttendance() {
    return this.http.get(this.url);
  }
}
