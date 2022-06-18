import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session/session.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material/dialog';
import { CreateSessionComponent } from '../../components/create-session/create-session.component';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  today = new Date();
  time = this.today.getHours() + ":" + this.today.getMinutes()

  myForm!: FormGroup;
  sessionStatus = 'Started';

  constructor(
    private router: Router,
    private sessionService: SessionService,
    public dialog: MatDialog) { }

    @ViewChild('childModal')
  public childModal!: ModalDirective;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      course: new FormControl(''),
      date: new FormControl(''),
      start: new FormControl(''),
      end: new FormControl(''),
      location: new FormControl(''),
      status: new FormControl(this.sessionStatus)
    });

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateSessionComponent, {
      width: '500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  viewAttendance() {
     this.router.navigate(['/attend']);
  }

  onSubmit(form: FormGroup) {
    
    if (this.myForm.value.start == this.time || this.myForm.value.start > this.time)
    {
      if(this.myForm.value.start <= this.myForm.value.end) {
        alert("Session has started");
      }
    }
    if(this.myForm.value.start < this.time) {
      alert("Session not started");
    }
     this.sessionService.createSession(form.value).subscribe(
      {
        next: (response) => {
          console.log(response);
          this.childModal.hide();
        },
        error: (error) => {
          console.log(error);
          this.childModal.hide();
        }
      }
     )
  }

}
