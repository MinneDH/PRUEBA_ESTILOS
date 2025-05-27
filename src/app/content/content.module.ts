import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
import { SharedModule } from '../components/Shared.module';



@NgModule({
  declarations: [
    ContentComponent,
  ],
  imports: [
    ContentRoutingModule,
    SharedModule,
  ]
})
export class ContentModule { }
