import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LevelsComponent } from './pages/levels/levels.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { StudentsComponent } from './pages/students/students.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'db',
    component: DashboardComponent
  },
  {
    path: 'session',
    component: SessionsComponent
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'student',
    component: StudentsComponent
  },
  {
    path: 'level',
    component: LevelsComponent
  },
  {
    path: 'attend',
    component: AttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
