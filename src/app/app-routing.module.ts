import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LevelsComponent } from './pages/levels/levels.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { StudentsComponent } from './pages/students/students.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'db',
    component: DashboardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'session',
    component: SessionsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'courses',
    component: CoursesComponent, canActivate: [AuthGuard]
  },
  {
    path: 'student',
    component: StudentsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'level',
    component: LevelsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'attend/:id',
    component: AttendanceComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
