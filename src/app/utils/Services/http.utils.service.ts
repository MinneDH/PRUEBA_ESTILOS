import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'dayjs'
import { environment } from 'src/environments/environment';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class UtilsService {
	verify: Boolean = false;
	horizontalPosition!: MatSnackBarHorizontalPosition;
	verticalPosition!: MatSnackBarVerticalPosition;
	API_BACK = environment.API.api_back;
	constructor(private snackBar: MatSnackBar, private http: HttpClient, private router: Router) { }

	public validRangestring(campo: String, largo: number) {
		if (campo.length === largo) { this.verify = true; }
		return this.verify;
	}

	public validEmail(email: string) {
		const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
		if (emailfilter.test(email)) { this.verify = true; }
		return this.verify;
	}

	public validPhone(phone: string) {
		const phonefilter = /[0-9]{10}/;
		if (phonefilter.test(phone)) { this.verify = true; } else { this.verify = false; };
		return this.verify;
	}

	public validPhoneSize(phone: string | any[], size: any) {
		if (phone.length === size) { this.verify = true; } else { this.verify = false; };
		return this.verify;
	}

	public validDateRange(date1: string, date2: string) {
		let regex = /[\-]/g; let T1 = date1.replace(regex, ""); let T2 = date2.replace(regex, "")
		if (T1 > T2) { this.verify = true; } else { this.verify = false; }
		return this.verify;
	}

	public validDateRangeMinor(date1: string, date2: string) {
		let regex = /[\-]/g; let T1 = date1.replace(regex, ""); let T2 = date2.replace(regex, "")
		if (T1 < T2) { this.verify = true; } else { this.verify = false; }
		return this.verify;
	}

	public onlyNumber(number: string) {
		const numberFilter = /^[0-9]+$/;
		if (number.match(numberFilter)) { return true; } else {
			return false;
		}
	}

	public onlyNumInput(event: any) {
		const charCode = (event.which) ? event.which : event.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			return false;
		}
		return true;
	}

	public onlyNumInputRange(event: any) {
		const charCode = (event.which) ? event.which : event.keyCode;
		if (charCode > 31 && (charCode < 45 || charCode > 57 || charCode == 47 || charCode == 46)) {
			return false;
		}
		return true;
	}

	public ISSNverifier(issn: any) {
		let rgxfltr = /[\-]/g, rgxISSN = /(\d)(\d)(\d)(\d)(\d)(\d)(\d)([\dxX])/g, filteredISSN = issn.replace(rgxfltr, "");
		if (filteredISSN.match(rgxISSN)) {
			return true;
		} else {
			return false;
		}
	}

	public ISBNverifier(isbn: any) {
		let rgxfltr = /[\b(ISSN)\b\s[\-]/g, rgxISBN = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/i, filteredISBN = isbn.replace(rgxfltr, "");
		if (filteredISBN.length > 9 && filteredISBN.length < 14) {
			if (filteredISBN.match(rgxISBN)) {
				return true;
			} else {
				return false;
			}
		}
		return filteredISBN.length;
	}

	public DOIverifier(DOI: any) {
		const filteredDOI = /\b(10\.[0-9]{4,}(?:\.[0-9]+)*\/(?:(?![\"&\'])\S)+)\b/gim;
		if (filteredDOI.test(DOI)) { this.verify = true; } else { this.verify = false; };
		return this.verify;
	}

	// New Snackbar | Infinite duration

	/**
	 * This new snackbar allows to show a message without time and ultil the button "Accept" was clicked
	 *
	 * @param {string} text: This param is the message that's will be showed
	 * @param posX: Represents the position in X axe, this value could be 'left' or 'right'
	 * @param posY: Represents the position in Y axe, this value could be 'top' or 'bottom'
	 */
	public SnackbarInfinite(text: string, posX:any, posY:any) {
		this.horizontalPosition = posX;
		this.verticalPosition = posY;
		this.snackBar.open(text, "Entendido", {
			panelClass: 'snackBar-dialog',
			horizontalPosition: this.horizontalPosition,
			verticalPosition: this.verticalPosition,
		});
	}

	public SnackbarMsgGeneral(msg: string, Phorizontal: string, Pvertical: string) {
		this.horizontalPosition = Phorizontal as MatSnackBarHorizontalPosition;
		this.verticalPosition = Pvertical as MatSnackBarVerticalPosition;
		this.snackBar.open(msg, "Entendido", {
			panelClass: 'snackBar-dialog',
			horizontalPosition: this.horizontalPosition,
			verticalPosition: this.verticalPosition,
			duration: 3000
		});
	}

	public SnackbarErrorMsgGeneral(msg: string, Phorizontal: string, Pvertical: string) {
		this.horizontalPosition = Phorizontal as MatSnackBarHorizontalPosition;
		this.verticalPosition = Pvertical as MatSnackBarVerticalPosition;
		this.snackBar.open(msg, "Entendido", {
			panelClass: 'snackBar-dialog-Error',
			horizontalPosition: this.horizontalPosition,
			verticalPosition: this.verticalPosition,
			duration: 3000
		});
	}

	public SnackbarWarningMsgGeneral(msg: any, Phorizontal:any, Pvertical:any) {
		this.horizontalPosition = Phorizontal;
		this.verticalPosition = Pvertical;
		this.snackBar.open(msg, "Entendido", {
			panelClass: 'snackBar-dialog-Warning',
			horizontalPosition: this.horizontalPosition,
			verticalPosition: this.verticalPosition,
			duration: 5500
		});
	}

	public isBrowser() {
		if (/Edg/.test(navigator.userAgent)) { return 'Edge' }
		else if (/Chrome/.test(navigator.userAgent)) { return 'Chrome' }
		else if (/Safari/.test(navigator.userAgent)) { return 'Safari' }
		else if (/Firefox/.test(navigator.userAgent)) { return 'Firefox' }
		else if (/Opera/.test(navigator.userAgent)) { return 'Opera' }
		else { return 'Other' };
	}

	public OS() {
		if (window.navigator.userAgent.match(/linux/i)) { return 'linux'; }
		if (window.navigator.userAgent.match(/windows nt | windows/i)) { return 'windows'; }
		if (window.navigator.userAgent.match(/mac os/i)) { return 'mac'; }
		if (!window.navigator.userAgent.match(/linux | windows nt | windows | mac os/i)) { return 'other'; }
		return 'other';
	}

	public FiltraMatricula(matricula:any) {
		const Mayus = matricula.toUpperCase();
		const CleanM = Mayus.replace(/^[Z]/, "");
		let Tam = CleanM.length;
		if (Tam != 9) { return null };
		const matFiltr = /^[S]+[0-9]{8}/;
		if (matFiltr.test(CleanM)) { return CleanM; } else { return null };
	}


	public tokenPresente() {
		let tkn = localStorage.getItem('accessToken'); let si; let no; let chk = tkn ? si = true : no = false; return chk;
	}

	public getTkn() {
		let tkn = localStorage.getItem('accessToken'); return tkn;
	}


	public GoToMenu() {
		setTimeout(() => { this.router.navigate(['/menu']); }, 3000);
	}

	
	public validImgExt(URL:any) {
		if ( URL.endsWith('.jpeg') || URL.endsWith('.png') || URL.endsWith('.jpg') || URL.endsWith('.jfif') ) { return true} else{ return false }
	}
}
