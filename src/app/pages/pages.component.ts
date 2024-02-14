import { Component } from '@angular/core';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  constructor(public patientsService: PatientsService) {
    console.log(patientsService.menu);
  }
}
