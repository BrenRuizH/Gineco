import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiServer } from '../apiServer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  url = apiServer.url;

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
  constructor(private http: HttpClient) { }

  postMethod(url: any, body: any): Observable<any> {
    return this.http.post(`${this.url}${url}`, body);
  }

  getMethod(url: any): Observable<any> {
    return this.http.get(`${this.url}${url}`);
  }
}
