import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUsuariosRoutingModule } from './gestion-usuarios-routing.module';
import { GestionUsuariosComponent } from './gestion-usuarios.component';
import { SharedModule } from 'src/app/components/Shared.module';


@NgModule({
  declarations: [
    GestionUsuariosComponent
  ],
  imports: [
    SharedModule,
    GestionUsuariosRoutingModule
  ]
})
export class GestionUsuariosModule { }
