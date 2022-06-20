import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/services/session/session.service';
import { CreateSessionComponent } from '../create-session/create-session.component';

@Component({
  selector: 'app-create-level',
  templateUrl: './create-level.component.html',
  styleUrls: ['./create-level.component.css']
})
export class CreateLevelComponent implements OnInit {

  loading = false;

  today = new Date();
  time = this.today.getHours() + ":" + this.today.getMinutes()

  myForm!: FormGroup;
  sessionStatus = 'Started';

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<CreateSessionComponent>,
    private spinner: NgxSpinnerService
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
    //  this.sessionService.createSession(form.value).subscribe(
    //   {
    //     next: (response) => {
    //       this.loading = false;
    //       this.toastr.success('Session created successfully');
    //       this.dialogRef.close();
    //     },
    //     error: (error) => {
    //       this.loading = false;
    //       this.toastr.error(error.message);
    //       this.dialogRef.close();
    //     }
    //   }
    //  )
  }

}
