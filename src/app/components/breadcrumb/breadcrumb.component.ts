import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() whereIam = "";

  IiS = false;
  IiSCE = false;
  IiSCEP = false;
  IiProyectos = false;
  IiUsuarios = false
  IiProyectosP = false;

  constructor() {}

  ngOnInit(): void {
    this.location()
  }  

  location() {
    switch (this.whereIam) {
      case "Solicitud":
        this.IiS = true;
        this.IiSCE = true;
      break;
      
      case "Registro":
        this.IiS = true;
        this.IiSCEP = true;
      break;

      case "Proyectos":
        this.IiS = true;
        this.IiProyectos = true;
      break;

      case "ProyectosP":
        this.IiS = true;
        this.IiProyectosP = true;
      break;

      case "Usuarios":
        this.IiS = true;
        this.IiUsuarios = true;
      break;
    }
  }

}
