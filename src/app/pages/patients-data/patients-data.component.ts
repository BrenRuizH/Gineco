import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patients-data',
  templateUrl: './patients-data.component.html',
  styleUrls: ['./patients-data.component.css']
})
export class PatientsDataComponent implements OnInit{

  pacientes: any = [];
  paciente: any = {};

  filtrarNombre: any = '';

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

  seleccionarPaciente(idpaciente:any) {
    this.patientsService.seleccionarPaciente(idpaciente).subscribe((resp: any) => {
      this.paciente = resp[0];
    })
  }

  editarPaciente() {
    Swal.fire({
      title: "¿Desea editar al paciente?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Editar",
      denyButtonText: `No acepto`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        let formData = new FormData();
        formData.append('nompaciente', this.paciente.nompaciente);
        formData.append('edadpaciente', this.paciente.edadpaciente);
        formData.append('telpaciente', this.paciente.telpaciente);
        formData.append('dirpaciente', this.paciente.dirpaciente);
        formData.append('idpaciente', this.paciente.idpaciente);

        this.patientsService.postMethod('EditarPaciente.php', formData).subscribe((event: any) =>{
          Swal.fire("¡Editado!", "", "success");
          if (event.status == 'success') {
            this.obtenerPactientes();
          }
        })
      } else if (result.isDenied) {
        Swal.fire("Ups!", "", "info");
      }
    });
  }

  eliminarPaciente(idpaciente: any) {
    Swal.fire({
      title: "¿Desea eliminar al paciente?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: `No acepto`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("¡Eliminado!", "", "success");
        this.patientsService.eliminarPaciente(idpaciente).subscribe((resp: any) => {
          if(resp['resultado'] == 'OK') {
            console.log('Paciente elimminado');
            this.obtenerPactientes();
          }
        })
      } else if (result.isDenied) {
        Swal.fire("Ups!", "", "info");
      }
    });
  }
}
