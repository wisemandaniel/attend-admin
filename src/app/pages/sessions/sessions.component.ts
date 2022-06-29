import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session/session.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { MatDialog } from '@angular/material/dialog';
import { CreateSessionComponent } from '../../components/create-session/create-session.component';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  loading = false;
  noSession = '';
  courseId = '6db9063d-55ca-4051-bf4b-97ab99fc337e';

  sessions: any[] = [];

  today = new Date();
  time = this.today.getHours() + ":" + this.today.getMinutes()

  myForm!: FormGroup;
  sessionStatus = 'Started';

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private session: SessionService) { }

  ngOnInit(): void {
    this.getSessions();
    this.spinner.show();
    this.myForm = new FormGroup({
      name: new FormControl(''),
      day: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
      comment: new FormControl(''),
      status: new FormControl(this.sessionStatus)
    });
  }

  getSessions() {
    this.session.getSessions().subscribe(
      {
        next: (response: any) => {
           this.sessions = response;
           console.log(response);
           if(this.sessions.length == 0){
              this.showSuccess('No session created!! Create a session to records students\' attendaance')
           }
        },
        error: (error) => {
           console.log(error);
           
        }
      }
    );
  }

  showSuccess(message: string, ) {
    this.toastr.success(message);
  }

  showError(message: string, ) {
    this.toastr.error(message);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateSessionComponent, {
      width: '500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getSessions();
    });
  }


  viewAttendance(sessionId: string) {
     this.router.navigate(['/attend/' + sessionId]);
  }

  deleteSession(id: string) {
    this.session.deleteSession(id).subscribe(
      {
        next: (response) => {
          this.showSuccess('Session is deleted');
          this.getSessions();
        },
        error: (error) => {
          this.showError(error.message)
        }
      }
    )
  }

}
