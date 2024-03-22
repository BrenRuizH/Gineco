import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-doctors-data',
  templateUrl: './doctors-data.component.html',
  styleUrls: ['./doctors-data.component.css']
})
export class DoctorsDataComponent implements OnInit {
  
  doctor: any[] = [];
  docto = {};

  constructor(private pacienteService: PatientsService) {}

  ngOnInit(): void {
    this.obtenerDoctores();
  }

  obtenerDoctores() {
    this.pacienteService.obtenerDoctores()
      .subscribe((resp: any) => {
        this.doctor = resp;
      })
  }

  seleccionarDoctor(iddoctor: any) {
    this.pacienteService.seleccionarDoctor(iddoctor)
      .subscribe((resp: any) => {
        this.docto = resp[0];
        console.log(this.docto);
      })
  }

  editarDoctor() {}
}
