import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent {

  expedientes: any = {};
  constructor(private activetedRouter: ActivatedRoute) {
    this.activetedRouter.params.subscribe(paramas => {
      this.expedientes = paramas['id'];
      console.log(this.expedientes);
    })
  }
}
