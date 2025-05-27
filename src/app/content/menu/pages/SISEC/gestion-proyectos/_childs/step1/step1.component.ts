import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  listaOpcionesParticipantes=[{ id: 1, nombre: "Academico UV", checked: true }, { id: 2, nombre: "Externo", checked: false }];
  UVOptionSaveAcademico:any=1; checkAcademico = new UntypedFormControl('', [Validators.required]);

  listaOpcionesAlumnos=[{ id: 1, nombre: "Alumno UV", checked: true }, { id: 2, nombre: "Externo", checked: false }];
  UVOptionSaveAlumnos:any=1; checkAlumno = new UntypedFormControl('', [Validators.required]);

  DatosDelProyectoPart1: UntypedFormGroup; 
  DatosDelProyectoPart2: UntypedFormGroup;
  DetallesDelProyecto: UntypedFormGroup;
  BuscarAcademico:UntypedFormGroup;
  BuscarAlumno:UntypedFormGroup;
  TipoParticipante:UntypedFormGroup;
  Externo!: UntypedFormGroup;
  ExternoAcademico:UntypedFormGroup;
  ExternoAlumno:UntypedFormGroup;
  LineasDeInvestigacion:UntypedFormGroup;
  CuerpoAcademico:UntypedFormGroup;
  RedUV:UntypedFormGroup;
  RedInternacional:UntypedFormGroup;
  Macrolineas:UntypedFormGroup;

  dataSourceA = new MatTableDataSource(); 
  columnasA: string[] = ['Producto', 'Actividad', 'Cantidad', 'Acciones'];

  dataSourceB = new MatTableDataSource(); 
  columnasB: string[] = ['NoParticipantes', 'Tipo', 'Nombre', 'Adscripcion', 'TipoParticipante', 'Acciones'];

  dataSourceC = new MatTableDataSource();
  columnasC: string[] = ['Titulo', 'Tipo', 'Numero', 'Nombre', 'Grado', 'Acciones'];

  dataSourceD = new MatTableDataSource();
  columnasD: string[] = ['Nombre', 'Numero', 'Responsable', 'Tipo', 'Acciones'];

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @ViewChild('APaginator') APaginator!: MatPaginator;  @ViewChild('ASort') ASort!: MatSort;
  @ViewChild('BPaginator') BPaginator!: MatPaginator;  @ViewChild('BSort') BSort!: MatSort;
  @ViewChild('CPaginator') CPaginator!: MatPaginator;  @ViewChild('CSort') CSort!: MatSort;

  constructor(private fb: UntypedFormBuilder,private router: Router,) {
    this.DatosDelProyectoPart1 = this.fb.group({
      Titulo:   ['', Validators.required],Descripcion: ['', Validators.required],
      Objetivo: ['', Validators.required],Clave:       ['', Validators.required],
    });

    this.DatosDelProyectoPart2 = this.fb.group({
      Producto:     ['', Validators.required],
      Actividades:  ['', Validators.required],
      Cantidad:     ['', Validators.required],
    });

    this.DetallesDelProyecto = this.fb.group({
      Duracion:   ['', Validators.required],
      Modalidad:   ['', Validators.required],
      Clasificacion: ['', Validators.required],
      Area:       ['', Validators.required],
      Campo:      ['', Validators.required],
      Tipo:       ['', Validators.required],
      Fuentes:     ['', Validators.required],

      // Checkboxes para fuentes de financiamiento
      noAplica: [false],
      gobiernoMunicipal: [false],
      estatal: [false],
      federal: [false],
      internacional: [false],
      sectorPrivado: [false],
      otrasAportaciones: [false],
      otrasAportacionesDetalle: ['']
    });

    this.ExternoAcademico = this.fb.group({
      Nombre: ['', Validators.required],
      ApellidoPaterno: ['', Validators.required],
      ApellidoMaterno: ['', Validators.required],
      Correo: ['', Validators.required],
      Institucion: ['', Validators.required],
      Colaboracion: ['', Validators.required],
      Pais : ['', Validators.required],
      Ciudad: ['', Validators.required],
      Estado: ['', Validators.required],
      TipoParticipante: ['', Validators.required],
    });

    this.ExternoAlumno = this.fb.group({
      Nombre: ['', Validators.required],
      ApellidoPaterno: ['', Validators.required],
      ApellidoMaterno: ['', Validators.required],
      Correo: ['', Validators.required],
      Institucion: ['', Validators.required],
      TipoParticipante: ['', Validators.required],
    })

    this.LineasDeInvestigacion = this.fb.group({
      Titulo: ['', Validators.required],
      Tipo: ['', Validators.required],
    })

    this.CuerpoAcademico = this.fb.group({
      Nombre: ['', Validators.required],
      Numero: ['', Validators.required],
      Grado: ['', Validators.required],
    });

    this.RedUV = this.fb.group({
      Nombre: ['', Validators.required],
      Numero: ['', Validators.required],
      Responsable: ['', Validators.required],
    });

    this.RedInternacional = this.fb.group({
      Nombre: ['', Validators.required],
      Numero: ['', Validators.required],
      Responsable: ['', Validators.required],
    });

    this.Macrolineas = this.fb.group({
      Nombre: ['', Validators.required],
      Numero: ['', Validators.required],
    });

    this.BuscarAcademico = this.fb.group({usuario: [''],});
    this.BuscarAlumno = this.fb.group({usuario: [''],});
    this.TipoParticipante = this.fb.group({Tipo: [''],});



  }
  ngOnInit(): void {
  
  }

  changeOptionAcademico(opcion: any){this.UVOptionSaveAcademico = opcion; if(this.UVOptionSaveAcademico==opcion){this.checkAcademico.reset();};}
  changeOptionAlumno(opcion: any){this.UVOptionSaveAlumnos = opcion; if(this.UVOptionSaveAlumnos==opcion){this.checkAlumno.reset();};}


  GoStep2() {
    this.router.navigate(['/menu/gestion-proyectos/step2']);
  }

  regresar(){
    this.router.navigate(['/menu/gestion-proyectos/']);
  }




}

