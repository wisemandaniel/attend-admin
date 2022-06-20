import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material/angular-material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { StudentsComponent } from './pages/students/students.component';
import { LevelsComponent } from './pages/levels/levels.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './components/create-session/create-session.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CreateLevelComponent } from './components/create-level/create-level.component';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { CreateCourseComponent } from './components/create-course/create-course/create-course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    SessionsComponent,
    CoursesComponent,
    StudentsComponent,
    LevelsComponent,
    AttendanceComponent,
    CreateSessionComponent,
    CreateLevelComponent,
    CreateCourseComponent
  ],
  imports: [
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
