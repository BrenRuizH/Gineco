import { Component } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent {

  patients: any = {};

  constructor (public patientsService: PatientsService) {}

  altaPaciente() {
    let formData = new FormData();
    formData.append('nompaciente', this.patients.nompaciente);
    formData.append('edadpaciente', this.patients.edadpaciente);
    formData.append('telpaciente', this.patients.telpaciente);
    formData.append('dirpaciente', this.patients.dirpaciente);

    this.patientsService.postMethod('altaPaciente.php', formData).subscribe((event: any) =>{
      console.log(event);
      if (event.status == 'success') {
        
      }
    })
  }
}
