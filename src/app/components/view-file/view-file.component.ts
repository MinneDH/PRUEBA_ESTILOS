
/* Version: Prod-23012023 */


import { Component, Inject, OnInit, ViewEncapsulation, } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UtilsService } from 'src/app/utils/Services/http.utils.service';

@Component({
  selector: 'app-view-file',
  templateUrl: './view-file.component.html',
  styleUrls: ['./view-file.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ViewFileComponent implements OnInit {
  trustedDashboardUrl!: SafeUrl; Title: any; pdfSrc: any; img!: boolean;
  constructor( public dialogRef: MatDialogRef<ViewFileComponent>, private sanitizer: DomSanitizer, @Inject(MAT_DIALOG_DATA) public data: any,private UtilsService: UtilsService) {}

  ngOnInit(): void {
    this.verificaExtension(this.data.URL);
    this.Title = this.data.Title; this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.URL);
  }

  onNoClick(): void {this.dialogRef.close();}
  
  verificaExtension(URL: any) { this.img= this.UtilsService.validImgExt(URL); }
}