import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TeacherSetupComponent } from './teacher-setup/teacher-setup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student-setup/student.component';
import { SchoolSetupComponent } from './school-setup/school-setup.component';
import { AdminSetupComponent } from './admin-setup/admin-setup.component';
import { DistrictSetupComponent } from './district-setup/district-setup.component';
import { DistrictCalendarComponent } from './district-calendar/district-calendar.component';
import { SchoolCalendarComponent } from './school-calendar/school-calendar.component';

@NgModule({
  declarations: [DashboardComponent, TeacherSetupComponent, StudentComponent, SchoolSetupComponent, AdminSetupComponent, DistrictSetupComponent, DistrictCalendarComponent, SchoolCalendarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
