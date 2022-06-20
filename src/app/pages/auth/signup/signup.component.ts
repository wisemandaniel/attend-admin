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
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl('ROLE_ADMIN')
    });
  }

  onSubmit(form: FormGroup) {
    this.loading = true;
    this.spinner.show();
     this.authService.register(form.value).subscribe(
      {
        next: (response) => {
          this.loading = false;
          this.router.navigate(['/db']);
          console.log(response);
        },
        error: (error) => {
          this.loading = false;
           this.toastr.error(error.message);
        }
      }
     )
  }

}
