import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './content/menu/pages/SISEC/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'menu',
    component: ContentComponent,
    loadChildren: () => import('./content/content.module').then(m => m.ContentModule)
  },
  {
    path: 'menu/SolicitudesDeCitas',
    component: DashboardComponent,
    loadChildren: () => import('./content/menu/pages/SISEC/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '',
    redirectTo: 'menu/SolicitudesDeCitas',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
