import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  public menu: any = [
    {
      title: 'Doctors',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Doctor´s Data', url: 'dashboard/doctors-data' }
      ]
    },
    {
      title: 'Patients',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Create Patient', url: 'dashboard/create-patient' },
        { title: 'Patient´s Data', url: 'dashboard/patients-data' }
      ]
    },
    {
      title: 'Medical History',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'New Record', url: 'dashboard/new-record' },
        { title: 'Patient´s Record', url: 'dashboard/patients-record' }
      ]
    }
  ]
  constructor() { }
}
