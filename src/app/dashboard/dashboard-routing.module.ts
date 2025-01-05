import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSetupComponent } from './admin-setup/admin-setup.component';
import { DashboardComponent } from './dashboard.component';
import { DistrictCalendarComponent } from './district-calendar/district-calendar.component';
import { DistrictSetupComponent } from './district-setup/district-setup.component';
import { SchoolCalendarComponent } from './school-calendar/school-calendar.component';
import { SchoolSetupComponent } from './school-setup/school-setup.component';
import { StudentComponent } from './student-setup/student.component';
import { TeacherSetupComponent } from './teacher-setup/teacher-setup.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'teacher', component: TeacherSetupComponent },
  { path: 'student', component: StudentComponent },
  { path: 'school', component: SchoolSetupComponent },
  { path: 'admin', component: AdminSetupComponent },
  { path: 'district', component: DistrictSetupComponent },
  { path: 'district-calendar', component: DistrictCalendarComponent },
  { path: 'school-calendar', component: SchoolCalendarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
