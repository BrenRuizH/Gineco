import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { PatientsService } from 'src/app/services/patients.service';

declare var $: any;

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

  imageChangedEvent: any = '';

  croppedImage: any = '../../../assets/assets/images/users/2.jpg';

  myFile: any;
  rotateStatus: boolean = false;
  flipHorizontalStatus: boolean = false;
  flipVerticalStatus: boolean = false;
  transform: ImageTransform = {};

  constructor(private patientsService: PatientsService, private activetedRouter: ActivatedRoute) {
    this.activetedRouter.params.subscribe(paramas => {
      this.expedientes = paramas['id'];
      console.log(this.expedientes);
    });
  }

  ngOnInit(): void {
      this.obtenerExpedientes();
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

  editarExpediente() {}

  fileChangeEvent(event: any) {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.myFile = this.dataURLtoFile(this.croppedImage, '../../../assets/assets/images/users/2.jpg');
  }

  dataURLtoFile(dataurl:any, filename:any) { 
    let arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }    
    return new File([u8arr], filename, {type:mime});
  }

  rotate() {
    this.rotateStatus = true;
    this.flipHorizontalStatus = false;
    this.flipVerticalStatus = false;
    const newValue = ((this.transform.rotate ?? 0) + 90) % 360;
    this.transform = {
      ...this.transform, 
      rotate:newValue
    }
  }

  flipHorizontal(){
    this.rotateStatus = false;
    this.flipHorizontalStatus = true;
    this.flipVerticalStatus = false;
    this.transform = {
      ...this.transform, 
      flipH: !this.transform.flipH
    }
  }

  flipVertical(){
    this.rotateStatus = false;
    this.flipHorizontalStatus = false;
    this.flipVerticalStatus = true;
    this.transform = {
      ...this.transform, 
      flipV: !this.transform.flipV
    }
  }
}
