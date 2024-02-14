import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  public menu: any = [
    {
      titulo: 'Doctors',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Doctor´s Data', url: 'dashboard/doctors-data'
        }
      ]
    },
    {
      titulo: 'Doctors',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Doctor´s Data', url: 'dashboard/doctors-data'
        }
      ]
    }
  ]
  constructor() { }
}
