import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AttendanceService } from 'src/app/services/attendance/attendance.service';
import { CourseService } from '../../services/course/course.service';
import { CreateCourseComponent } from '../../components/create-course/create-course/create-course.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

 
  data: any;

  displayedColumns: string[] = ['code', 'title', 'level'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private courseService: CourseService,
    public dialog: MatDialog) { }

  ngAfterViewInit() {
    this.data.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAttendanceData();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCourseComponent, {
      width: '500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAttendanceData();
    });
  }

  getAttendanceData() {
    this.courseService.getCourses().subscribe(
      {
        next: (response: any) => {
          this.data = new MatTableDataSource<any>(response)
          console.log(this.data);
          this.data.paginator = this.paginator;
        },
        error: (error) => {

        }
      }
    )
  }

}
