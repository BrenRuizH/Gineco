import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/services/patients.service';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.css']
})
export class NewRecordComponent implements OnInit{
  mostrar: boolean = false;
  patients: any[] = [];

  fecha = new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();

  newhistorial: any = {
    idpaciente: '',
    fechahistorial: this.fecha
  };

  constructor(private patientsService: PatientsService, private router: Router) {}

  ngOnInit(): void {
      this.getPatients();
      $(document).ready(function() {
        // Basic
        $('.dropify').dropify();
    
        // Translated
        $('.dropify-fr').dropify({
            messages: {
                default: 'Glissez-déposez un fichier ici ou cliquez',
                replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
                remove: 'Supprimer',
                error: 'Désolé, le fichier trop volumineux'
            }
        });
    
        // Used events
        var drEvent = $('#input-file-events').dropify();
    
        drEvent.on('dropify.beforeClear', function(event: any, element: any) {
            return confirm("Do you really want to delete \"" + element.file.name + "\" ?");
        });
    
        drEvent.on('dropify.afterClear', function(event: any, element: any) {
            alert('File deleted');
        });
    
        drEvent.on('dropify.errors', function(event: any, element: any) {
            console.log('Has Errors');
        });
    
        var drDestroy = $('#input-file-to-destroy').dropify();
        drDestroy = drDestroy.data('dropify')
        $('#toggleDropify').on('click', function(e: any) {
            e.preventDefault();
            if (drDestroy.isDropified()) {
                drDestroy.destroy();
            } else {
                drDestroy.init();
            }
        })
    });
  }

  getPatients() {
    this.patientsService.getMethod('ObtenerPacientes.php').subscribe((data) => {
      this.patients = data.document;
      console.log(this.patients);
    })
  }

  altaHistorial() {
    Swal.fire({
      title: "¿Desea regitrar el historial?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Registrar",
      denyButtonText: `No acepto`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        let formData = new FormData();
        formData.append('pesohistorial', this.newhistorial.pesohistorial);
        formData.append('tallahistorial', this.newhistorial.tallahistorial);
        formData.append('fchistorial', this.newhistorial.fchistorial);
        formData.append('frhistorial', this.newhistorial.frhistorial);
        formData.append('ahhistorial', this.newhistorial.ahhistorial);
        formData.append('apnphistorial', this.newhistorial.apnphistorial);
        formData.append('hemotipohistorial', this.newhistorial.hemotipohistorial);
        formData.append('alergiashistorial', this.newhistorial.alergiashistorial);
        formData.append('apphistorial', this.newhistorial.apphistorial);
        formData.append('citahistorial', this.newhistorial.citahistorial);
        formData.append('idpaciente', this.newhistorial.idpaciente);
        formData.append('diagnostico', this.newhistorial.diagnostico);
        formData.append('fechahistorial', this.newhistorial.fechahistorial);

        this.patientsService.postMethod('NuevoHistorial.php', formData).subscribe((event: any) =>{
          Swal.fire("¡Registrado!", "", "success");
          if (event.status == 'success') {
            this.router.navigate(['/dashboard/patients-record']);
          }
        })
      } else if (result.isDenied) {
        Swal.fire("Ups!", "", "info");
      }
    });
  }
}
