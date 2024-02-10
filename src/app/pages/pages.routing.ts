import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { DoctorsDataComponent } from './doctors-data/doctors-data.component';
import { PatientsDataComponent } from './patients-data/patients-data.component';
import { RecordComponent } from './record/record.component';
import { PatientsRecordComponent } from './patients-record/patients-record.component';
import { NewRecordComponent } from './new-record/new-record.component';

const routes: Routes = [
    {
        path: 'dashboard', component: PagesComponent,
        children: [
            { path: 'create-patient', component: CreatePatientComponent },
            { path: 'doctors-data', component: DoctorsDataComponent },
            { path: 'patients-data', component: PatientsDataComponent },
            { path: 'record/:id', component: RecordComponent },
            { path: 'patients-record', component: PatientsRecordComponent },
            { path: 'new-record', component: NewRecordComponent }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
