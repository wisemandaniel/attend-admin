import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading = false;
  myForm!: FormGroup;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private local: LocalStorageService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      matricule: new FormControl('')
    });
  }

  onSubmit(form: FormGroup) {
    this.loading = true;
    this.spinner.show();
    this.authService.login(form.value).subscribe(
     {
       next: (response: any) => {
        this.loading = false;
        this.local.saveToken(response.accessToken);
        this.local.saveUser(JSON.stringify(response));
        this.router.navigate(['/db']);
       },
       error: (error) => {
        this.loading = false;
         this.toastr.error(error.error.message);
       }
     }
    )
 }

}
