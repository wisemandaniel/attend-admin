import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CreateSessionComponent } from 'src/app/components/create-session/create-session.component';
import { CreateLevelComponent } from '../../components/create-level/create-level.component';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {

  loading = false;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

  showSuccess(message: string, ) {
    this.toastr.success(message);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateLevelComponent, {
      width: '500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  viewStudents() {
     this.router.navigate(['/attend']);
  }

}
