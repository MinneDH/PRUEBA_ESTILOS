
/* Version: Prod-23012023 */

import { Component, Input, ViewChild } from '@angular/core';
import { EvidenciaService } from 'src/app/utils/Services/evidencia.service';
import { GetDataService } from 'src/app/utils/Services/get-data.service';
@Component({
  selector: 'app-evidencia',
  templateUrl: './evidencia.component.html',
  styleUrls: ['./evidencia.component.scss']
})
export class EvidenciaComponent {

  @Input() model: any;
  @Input() allowedFiles!: string[];
  @Input() maxSize = 5242880;
  @Input() MaxFiles = 0;
  public fileDataModel = null;
  public errorMsg = '';
  public files: any = [];
  public msg = "";
  public addFiles: any;
  @ViewChild('file') file: any;
  constructor(private evidenciaService: EvidenciaService,private GetDataService: GetDataService,) { }

  addFile(fileInput: any) {
    let getArchivos: any = [];
    Array.from(fileInput.target.files).forEach(file => {getArchivos.push(file);});
    getArchivos.forEach((NuevoArchivo: File) => {
      if (!(this.allowedFiles == undefined || (this.allowedFiles && this.allowedFiles.includes(NuevoArchivo.type)))) {
        this.errorMsg = 'Tipo de archivo no válido.';
      } else if (!((this.maxSize !== 0 && NuevoArchivo.size <= this.maxSize) || this.maxSize == 0)) {
        this.errorMsg = 'Peso Máximo ' + (this.maxSize / 1048576) + ' MB';
      } else if (this.files.length >= 0) {
        for (let i = 0; i < this.files.length; i++) {
          if (NuevoArchivo.name === this.files[i].name) {return;}
        }
        this.errorMsg = 'Archivo cargado, listo para procesar';
        this.files.push(NuevoArchivo);this.updateModel();
      }
    });
  }

  public updateModel() {
    if (this.files.length > this.MaxFiles) {
      if (this.MaxFiles == 1) { this.errorMsg = 'Sólo se admite ' + this.MaxFiles + ' archivo'; }
      else { this.errorMsg = 'Sólo se admiten ' + this.MaxFiles + ' archivos'; }
      this.files.pop();
      this.updateModel();
      return;
    } else {
      console.log('Tranmití: ', this.files);
      this.evidenciaService.trigger01.emit(this.files);
    }
  }

  deleteFile(File:any) {
    this.errorMsg = 'Archivo eliminado';
    this.files.splice(this.files.indexOf(File), 1);
    this.file.nativeElement.value = '';
    this.addFiles = null;
    this.updateModel();
  }

  previewData(file: any) {
    const dialogRef = this.GetDataService.showFile(file);
    dialogRef.afterClosed();
  }

}
