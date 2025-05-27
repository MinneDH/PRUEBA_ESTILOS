import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionProyectosComponent } from './gestion-proyectos.component';

const routes: Routes = [{ path: '', component: GestionProyectosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionProyectosRoutingModule { }
