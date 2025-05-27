import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { SharedModule } from 'src/app/components/Shared.module';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    SharedModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
