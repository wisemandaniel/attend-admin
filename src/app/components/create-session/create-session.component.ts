import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  today = new Date();
  time = this.today.getHours() + ":" + this.today.getMinutes()

  myForm!: FormGroup;
  sessionStatus = 'Started';

  constructor(
    private router: Router,
    private sessionService: SessionService,
    public dialogRef: MatDialogRef<CreateSessionComponent>
  ) { }

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
          this.dialogRef.close();
        },
        error: (error) => {
          console.log(error);
        }
      }
     )
  }


}
