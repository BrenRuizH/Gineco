import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  public menu: any = [
    {
      title: 'Doctors',
      icon: 'mdi mdi-stethoscope',
      submenu: [
        { title: 'Doctor´s Data', url: 'doctors-data' }
      ]
    },
    {
      title: 'Patients',
      icon: 'mdi mdi-account',
      submenu: [
        { title: 'Create Patient', url: 'create-patient' },
        { title: 'Patient´s Data', url: 'patients-data' }
      ]
    },
    {
      title: 'Medical History',
      icon: 'mdi mdi-content-paste',
      submenu: [
        { title: 'New Record', url: 'new-record' },
        { title: 'Patient´s Record', url: 'patients-record' }
      ]
    }
  ]
  constructor() { }
}
