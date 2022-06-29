import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AttendanceService } from 'src/app/services/attendance/attendance.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  data: any;
  sessionId: any;
  color = 'green';

  displayedColumns: string[] = ['name', 'matricule', 'date', 'time', 'remark'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private toastr: ToastrService,
    private attendanceService: AttendanceService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sessionId = this.route.snapshot.paramMap.get('id');
    console.log(this.sessionId);
    this.getAttendanceData();
  }

  showSuccess(message: string, ) {
    this.toastr.success(message);
  }

  showError(message: string, ) {
    this.toastr.error(message);
  }

  getAttendanceData() {
    this.attendanceService.getAttendance(this.sessionId).subscribe(
      {
        next: (response: any) => {
          console.log(response);

          response.forEach((item: any) =>{
            var x = item.remark
            var y = item.session;
            console.log(x);
            
            if(x == 'Late') {
              this.color = 'red';
            } else {
              this.color = 'green';
            }

            console.log(this.color);
            
          });

          this.data = new MatTableDataSource<any>(response)
          this.data.paginator = this.paginator;
          if(response.length == 0) {
            this.showSuccess('No student yet');
          }
        },
        error: (error) => {

        }
      }
    )
  }

}
