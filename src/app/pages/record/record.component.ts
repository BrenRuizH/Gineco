import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from 'src/app/services/patients.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit{

  mostrar: boolean = false;
  expedientes: any = {};
  expediente: any = [];
  exp: any[] = [];

  croppedImage: any = '../../../assets/assets/images/users/2.jpg';

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

  seleccionarExpediente(idhistorial: any) {
    this.patientsService.seleccionarExpedientes(idhistorial)
    .subscribe((resp: any) => {
      this.expediente = resp[0];
      this.croppedImage = this.patientsService.url + "images/" + this.expediente.imghistorial + ".jpg";
      console.log(this.expediente);
    })
  }
}
