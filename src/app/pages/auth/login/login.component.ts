import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      matricule: new FormControl('')
    });
  }

  onSubmit(form: FormGroup) {
    this.authService.login(form.value).subscribe(
     {
       next: (response) => {
         this.router.navigate(['/db']);
       },
       error: (error) => {
         console.log(error);
       }
     }
    )
 }

}
