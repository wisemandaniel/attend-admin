import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AttendanceService } from 'src/app/services/attendance/attendance.service';
import { PeriodicElement } from '../attendance/attendance.component';
import { StudentService } from '../../services/auth/student/student.service';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
// import {} from '@types/googlemaps';
// import { AgmCoreModule, MapsAPILoader } from "@agm/core";
import { SessionService } from 'src/app/services/session/session.service';
import { EditStudentComponent } from 'src/app/components/edit-student/edit-student.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  data: any;
  role: any;

  displayedColumns: string[] = ['name', 'matricule', 'level', 'mac', 'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private studentService: StudentService,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private session: SessionService) { }

  ngAfterViewInit() {
    this.data.paginator = this.paginator;
  }

  openDialog(id: string): void {
    console.log(id);
    
    const dialogRef = this.dialog.open(EditStudentComponent, {
      width: '500px',
      data: {id: id},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getStudents();
    });
  }

  ngOnInit(): void {
    const user: any = localStorage.getItem('user');
    const userObj = JSON.parse(user);
    this.role = userObj.role[0]
    console.log(userObj);
    console.log(this.role);
    this.getStudents();
  }

  getStudents() {
    this.studentService.getAllStudent().subscribe(
      {
        next: (response: any) => {
          this.data = new MatTableDataSource<any>(response)
          console.log(response);
          this.data.paginator = this.paginator;
        },
        error: (error) => {
          console.log(error);
        }
      }
    )
  }
}
