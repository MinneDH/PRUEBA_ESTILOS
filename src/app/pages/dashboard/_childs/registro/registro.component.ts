import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  minDate!: Date; maxDate!: Date;
  NewRequest!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder,private router: Router, ) {

    this.NewRequest= this.fb.group({
      NoPer:        ['', Validators.required],Nombre:       ['', Validators.required],
      Programa:     ['', Validators.required],Lugar:        ['',Validators.required],
      Modalidad:    ['', Validators.required],Sede:         ['', Validators.required],
      FechaI:       ['', Validators.required],FechaT:       ['', Validators.required],
    });
  }

  ngOnInit(): void {
    
  }


  regresar(){
    this.router.navigate(['/SuperacionAcademica/SolicitudCitas']);
  }
}
