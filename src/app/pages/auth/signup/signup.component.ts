import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loading = false;

  myForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl('ROLE_LECTURER')
    });
  }

  onSubmit(form: FormGroup) {
    this.loading = true;
    this.spinner.show();
     this.authService.register(form.value).subscribe(
      {
        next: (response: any) => {
          this.loading = false;
          console.log(response);
          this.toastr.success(response.message);
        },
        error: (error) => {
          this.loading = false;
          this.toastr.error(error.error.message);
        }
      }
     )
  }

}
