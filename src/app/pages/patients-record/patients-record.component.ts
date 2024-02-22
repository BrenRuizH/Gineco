import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-patients-record',
  templateUrl: './patients-record.component.html',
  styleUrls: ['./patients-record.component.css']
})
export class PatientsRecordComponent implements OnInit{

  newHistoriales: any[] = [];

  constructor(public patientService: PatientsService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerHistoriales();
  }

  obtenerHistoriales() {
    this.patientService.obtenerHistoriales()
    .subscribe((resp: any) => {
      this.newHistoriales = resp;
      console.log(this.newHistoriales);
    })
  }

  verExpediente(idpaciente: any) {
    this.router.navigate(['/dashboard/record', idpaciente]);
  }
}
