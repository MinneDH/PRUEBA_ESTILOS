import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

export interface DatosMuestra {ID:any, Nombre:any, Data: any; }
const fake_DATA: DatosMuestra[] = [
  { 
    ID: "1", 
    Nombre: "Citas de Superación Académica", 
    Data: "En este podcast encontrarán todo lo relacionado con las citas de superación académica y unas actividades con respecto a esto.",
  }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private modalRef!: NgbModalRef;
  ModalView!: UntypedFormGroup;
  ModalDelete!: UntypedFormGroup;

  dataSourceC = new MatTableDataSource(fake_DATA);
  columnas: string[] = ['id', 'Nombre','Acciones'];

  @ViewChild('CPaginator', { static: false }) paginatorC!: MatPaginator;  @ViewChild('CSort') sortC!: MatSort;
  @ViewChild('Modalview') Modalview: any;
  @ViewChild('Modaldelete') Modaldelete: any;


  constructor(private fb: UntypedFormBuilder,private modalService: NgbModal,private router: Router,) { 
    this.ModalView = this.fb.group({ });
    this.ModalDelete = this.fb.group({ });
  }

  ngOnInit(): void {
  
  }

  closeModal(){this.modalRef.close();}

  openModalView(){
    this.modalRef = this.modalService.open(this.Modalview);
    this.modalRef.result.catch(() => {});
  }

  openModalDelete(){
    this.modalRef = this.modalService.open(this.Modaldelete);
    this.modalRef.result.catch(() => {});
  }
  

  GoModalRegistro(accion: any){
    let queryParams={accion:accion}
    localStorage.setItem('queryParams',JSON.stringify(queryParams));
    this.router.navigate(['/SuperacionAcademica/SolicitudCitas/Registro']);
  }

}
