import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-patients-data',
  templateUrl: './patients-data.component.html',
  styleUrls: ['./patients-data.component.css']
})
export class PatientsDataComponent implements OnInit{

  pacientes: any = [];

  constructor(private patientsService: PatientsService) {
    this.obtenerPactientes();
  }

  ngOnInit(): void {
    this.obtenerPactientes();
  }

  obtenerPactientes() {
    this.patientsService.getMethod('ObtenerPacientes.php').subscribe((data) => {
      this.pacientes = data.document;
    })
  }
}
