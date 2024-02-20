import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.css']
})
export class NewRecordComponent implements OnInit{
  mostrar: boolean = false;
  patients: any[] = []

  constructor(private patientsService: PatientsService) {}

  ngOnInit(): void {
      this.getPatientes();
  }

  getPatientes() {
    this.patientsService.getMethod('ObtenerPacientes.php').subscribe((data) => {
      this.patients = data.document;
      console.log(this.patients);
    })
  }
}
