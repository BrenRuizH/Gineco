import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-doctors-data',
  templateUrl: './doctors-data.component.html',
  styleUrls: ['./doctors-data.component.css']
})
export class DoctorsDataComponent implements OnInit {
  
  doctor: any[] = [];
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
}
