import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../../services/auth/student/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  mac = "";

  constructor(
    private studentService: StudentService,
    public dialogRef: MatDialogRef<EditStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.mac = this.data.mac;
  }

  editMac() {
    const data = {
      value: this.mac
    }

    this.studentService.editMac(this.data.matricule, data).subscribe(
      {
        next: (response) => {
          this.toastr.success('Mac address updated');
          this.dialogRef.close();
        },
        error: (error) => {
          this.toastr.error(error.error.message);
          this.dialogRef.close();
        }
      }
    )
  }

}
