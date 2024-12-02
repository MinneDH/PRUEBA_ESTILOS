import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'SuperacionAcademica/SolicitudCitas',
    pathMatch: 'full'
  },

  { 
    path: 'SuperacionAcademica/SolicitudCitas', 
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  {
    path: 'SuperacionAcademica/SolicitudCitas/Registro', 
    loadChildren: () => import('./pages/dashboard/_childs/registro/registro.module').then(m => m.RegistroModule) 

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
