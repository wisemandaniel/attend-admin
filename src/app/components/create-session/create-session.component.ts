import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/services/session/session.service';
import { CourseService } from '../../services/course/course.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  loading = false;
  courses: any[] = [];
  courseId = '';

  today = new Date();
  time = this.today.getHours() + ":" + this.today.getMinutes()

  myForm!: FormGroup;
  sessionStatus = 'Started';

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private courseService: CourseService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<CreateSessionComponent>,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      day: new FormControl(''),
      startTime: new FormControl(''),
      endTime: new FormControl(''),
      comment: new FormControl(''),
      capacity: new FormControl('')
    });

    this.getAllCourses();
  }

  getAllCourses() {
    this.courseService.getCourses().subscribe(
      {
        next: (response: any) => {
          this.courses = response;
          console.log(this.courses);
          
        }
      }
    )
  }

  onSubmit(form: FormGroup) {
    
    // if (this.myForm.value.start == this.time || this.myForm.value.start > this.time)
    // {
    //   if(this.myForm.value.start <= this.myForm.value.end) {
    //     alert("Session has started");
    //   }
    // }
    // if(this.myForm.value.start < this.time) {
    //   alert("Session not started");
    // }
    this.courseId = form.value.name;
    console.log(this.courseId);

    const {name, ...sessionData} = form.value;
    
     this.sessionService.createSession(sessionData, this.courseId).subscribe(
      {
        next: (response) => {
          this.loading = false;
          this.toastr.success('Session created successfully');
          this.dialogRef.close();
        },
        error: (error) => {
          this.loading = false;
          this.toastr.error(error.error.message);
          this.dialogRef.close();
        }
      }
     )
  }


}
