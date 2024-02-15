import { Component } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-patients-data',
  templateUrl: './patients-data.component.html',
  styleUrls: ['./patients-data.component.css']
})
export class PatientsDataComponent {

  pacientes: any = {};

  constructor(private patientsService: PatientsService) {
    this.obtenerPactientes();
  }

  obtenerPactientes() {
    this.patientsService.getMethod('ObtenerPacientes.php').subscribe((data) => {
      console.log(data);
      this.pacientes = data.document;
      console.log(this.pacientes);
    })
  }
}
