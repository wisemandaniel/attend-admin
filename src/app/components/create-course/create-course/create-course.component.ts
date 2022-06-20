import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/services/course/course.service';
import { SessionService } from 'src/app/services/session/session.service';
import { CreateSessionComponent } from '../../create-session/create-session.component';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  loading = false;

  myForm!: FormGroup;

  constructor(
    private router: Router,
    private courseService: CourseService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<CreateSessionComponent>,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      code: new FormControl(''),
      level: new FormControl(''),
      title: new FormControl('')
    });
  }

  onSubmit(form: FormGroup) {
     this.courseService.createCours(form.value).subscribe(
      {
        next: (response) => {
          this.loading = false;
          this.toastr.success('Session created successfully');
          this.dialogRef.close();
        },
        error: (error) => {
          this.loading = false;
          this.toastr.error(error.message);
          this.dialogRef.close();
        }
      }
     )
  }


}
