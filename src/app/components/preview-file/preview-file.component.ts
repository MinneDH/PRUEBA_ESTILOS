
/* Version: Prod-23012023 */

import { Component, Inject, OnInit, ViewEncapsulation, } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-preview-file',
  templateUrl: './preview-file.component.html',
  styleUrls: ['./preview-file.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PreviewFileComponent implements OnInit {

  trustedDashboardURL!: SafeUrl;
  video: boolean = false;
  audio: boolean = false;
  img: boolean = false;
  pdf: boolean = false;
  src_video: any = null;
  src_audio: any = null;
  src_img: any = null;
  src_pdf: any = null;

  FileInput:any;

  constructor(
    public dialogRef: MatDialogRef<PreviewFileComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.FileInput = this.data.File;
    this.view(this.FileInput);
  }
  view(element:any) {

    let file_url = URL.createObjectURL(element);

    if (element.type.match(/image.*/i)) {
      this.src_img = this.sanitizer.bypassSecurityTrustResourceUrl(file_url);
      this.img = true;
    }
    if (element.type.match(/application.pdf/i)) {
      this.src_pdf = this.sanitizer.bypassSecurityTrustResourceUrl(file_url);
      this.pdf = true;
    }
    if (element.type.match(/audio.*/i)) {
      this.src_audio = this.sanitizer.bypassSecurityTrustResourceUrl(file_url);
      this.audio = true;
    }
    if (element.type.match(/video.*/i)) {
      this.src_video = this.sanitizer.bypassSecurityTrustResourceUrl(file_url);
      this.video = true;
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
