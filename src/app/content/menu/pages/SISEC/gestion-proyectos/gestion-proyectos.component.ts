import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-proyectos',
  templateUrl: './gestion-proyectos.component.html',
  styleUrls: ['./gestion-proyectos.component.scss']
})
export class GestionProyectosComponent implements OnInit {

  dataSource = new MatTableDataSource(); 
  dataSourceHistorico = new MatTableDataSource();
  dataSourceEVA = new MatTableDataSource();

  constructor(private router: Router,){}

  ngOnInit(): void {
    
  }

  filtrar(event: Event, filtroSelected: any) {
    const filtro = (event.target as HTMLInputElement).value;
    switch (filtroSelected) {
      case 'Actual': this.dataSource.filter = filtro.trim().toLowerCase(); break;
      case 'Historico': this.dataSourceHistorico.filter = filtro.trim().toLowerCase(); break;
    }
  }

  gomodal() {
    this.router.navigate(['/menu/gestion-proyectos/step1']);
  }
}
