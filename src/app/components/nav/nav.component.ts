import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private toastr: ToastrService
    ) {}

    ngOnInit(): void { 
      const user: any = localStorage.getItem('user');
      this.user = JSON.parse(user);
      console.log(this.user);
    }


  logout() {
    console.log('button clicked');
    this.toastr.success('Logout successfully');
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
