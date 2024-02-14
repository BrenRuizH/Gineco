import { Component } from '@angular/core';
import { PatientsService } from '../services/patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  constructor(public patientsService: PatientsService, public router: Router) {
    console.log(patientsService.menu);
  }

  logout() {
    this.router.navigateByUrl('/login');
  }
}
