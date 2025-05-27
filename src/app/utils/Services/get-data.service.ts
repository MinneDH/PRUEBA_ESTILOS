
/* Version: Prod-23012023 */

import { Injectable } from '@angular/core';
import { ViewFileComponent } from 'src/app/components/view-file/view-file.component';
import { PreviewFileComponent } from 'src/app/components/preview-file/preview-file.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({providedIn: 'root'})
export class GetDataService {
	constructor(private dialog: MatDialog) { }
	showPDF(URL: any, Title:any) {
		return this.dialog.open(ViewFileComponent, {
			disableClose: true, data: { URL, Title },
		});
	}

	showFile(File:any) {
		return this.dialog.open(PreviewFileComponent, {
			disableClose: true, data: { File },
		});
	}

}
