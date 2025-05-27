import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'SolicitudesDeCitas',
        loadChildren: () => import('./menu/pages/SISEC/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'SolicitudesDeCitas/Registro',
        loadChildren: () => import('./menu/pages/SISEC/dashboard/_childs/registro/registro.module').then(m => m.RegistroModule)
      },
      { path: 'gestion-usuarios', 
        loadChildren: () => import('./menu/pages/SISEC/gestion-usuarios/gestion-usuarios.module').then(m => m.GestionUsuariosModule) 
      },
      { path: 'gestion-proyectos', 
        loadChildren: () => import('./menu/pages/SISEC/gestion-proyectos/gestion-proyectos.module').then(m => m.GestionProyectosModule) 
      },
      { path: 'gestion-proyectos/step1', 
        loadChildren: () => import('./menu/pages/SISEC/gestion-proyectos/_childs/step1/step1.module').then(m => m.Step1Module) 
      },
      { path: 'gestion-proyectos/step2', 
        loadChildren: () => import('./menu/pages/SISEC/gestion-proyectos/_childs/step2/step2.module').then(m => m.Step2Module) 
      },
    ],
  },
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
