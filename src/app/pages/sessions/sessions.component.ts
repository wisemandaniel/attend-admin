import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewAttendance() {
     this.router.navigate(['/attend']);
  }

}
