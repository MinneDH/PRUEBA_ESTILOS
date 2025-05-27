import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionProyectosRoutingModule } from './gestion-proyectos-routing.module';
import { GestionProyectosComponent } from './gestion-proyectos.component';
import { SharedModule } from 'src/app/components/Shared.module';


@NgModule({
  declarations: [
    GestionProyectosComponent
  ],
  imports: [
    SharedModule,
    GestionProyectosRoutingModule
  ]
})
export class GestionProyectosModule { }
