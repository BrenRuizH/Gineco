import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/services/patients.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent {

  patients: any = {};

  constructor (public patientsService: PatientsService, public router: Router) {}

  altaPaciente() {
    Swal.fire({
      title: "¿Desea regitrar al paciente?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Registrar",
      denyButtonText: `No acepto`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        let formData = new FormData();
        formData.append('nompaciente', this.patients.nompaciente);
        formData.append('edadpaciente', this.patients.edadpaciente);
        formData.append('telpaciente', this.patients.telpaciente);
        formData.append('dirpaciente', this.patients.dirpaciente);
        console.log(formData);

        this.patientsService.postMethod('altaPaciente.php', formData).subscribe((event: any) =>{
          console.log(event);
          Swal.fire("¡Registrado!", "", "success");
          if (event.status == 'success') {
            this.router.navigate(['/dashboard/new-record']);
          }
        })
      } else if (result.isDenied) {
        Swal.fire("Ups!", "", "info");
      }
    });

    
  }
}
