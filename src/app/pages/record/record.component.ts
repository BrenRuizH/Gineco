import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit{

  expedientes: any = {};
  exp: any[] = [];

  constructor(private patientsService: PatientsService, private activetedRouter: ActivatedRoute) {
    this.activetedRouter.params.subscribe(paramas => {
      this.expedientes = paramas['id'];
      console.log(this.expedientes);
    });
  }

  ngOnInit(): void {
      this.obtenerExpedientes();
  }

  obtenerExpedientes() {
    this.patientsService.obtenerExpedientes(this.expedientes)
    .subscribe((resp: any) => {
      this.exp = resp;
      console.log(this.exp);
    });
  }
}
