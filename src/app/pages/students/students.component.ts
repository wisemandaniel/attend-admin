import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AttendanceService } from 'src/app/services/attendance/attendance.service';
import { PeriodicElement } from '../attendance/attendance.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  data: any;

  displayedColumns: string[] = ['name', 'matricule', 'level', 'mac'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private attendanceService: AttendanceService) { }

  ngAfterViewInit() {
    this.data.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAttendanceData();
  }

  getAttendanceData() {
    // this.attendanceService.getAttendance().subscribe(
    //   {
    //     next: (response: any) => {
    //       this.data = new MatTableDataSource<any>(response)
    //       console.log(this.data);
    //       this.data.paginator = this.paginator;
    //     },
    //     error: (error) => {

    //     }
    //   }
    // )
  }
}
