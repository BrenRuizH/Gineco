import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctors-data',
  templateUrl: './doctors-data.component.html',
  styleUrls: ['./doctors-data.component.css']
})
export class DoctorsDataComponent implements OnInit {
  
  doctor: any[] = [];
  docto: any = {};

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

  editarDoctor() {
    this.pacienteService.editarDoctor(this.docto)
      .subscribe((resp: any) => {
        if(resp['resultado'] == 'OK') {
          Swal.fire({
            icon: 'success',
            title: 'Actualizado correctamente',
            timer: 2000
          });
          this.obtenerDoctores();
        }
      });
  }
}
