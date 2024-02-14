import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { DoctorsDataComponent } from './doctors-data/doctors-data.component';
import { PatientsDataComponent } from './patients-data/patients-data.component';
import { RecordComponent } from './record/record.component';
import { PatientsRecordComponent } from './patients-record/patients-record.component';
import { NewRecordComponent } from './new-record/new-record.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagesComponent,
    LoginComponent,
    CreatePatientComponent,
    DoctorsDataComponent,
    PatientsDataComponent,
    RecordComponent,
    PatientsRecordComponent,
    NewRecordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }
