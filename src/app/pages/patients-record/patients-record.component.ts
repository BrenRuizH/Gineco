import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-patients-record',
  templateUrl: './patients-record.component.html',
  styleUrls: ['./patients-record.component.css']
})
export class PatientsRecordComponent implements OnInit{

  newHistoriales: any[] = [];

  constructor(public patientService: PatientsService) {}

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
}
