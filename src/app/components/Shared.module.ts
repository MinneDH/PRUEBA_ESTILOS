import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatCardModule} from '@angular/material/card';
import { MenuPluginComponent } from './menu-plugin/menu-plugin.component';
import { EvidenciaComponent } from './evidencia/evidencia.component';


@NgModule({
  declarations: [
    BreadcrumbComponent,
    MenuPluginComponent,
    EvidenciaComponent

  ],
  exports: [
    MenuPluginComponent,
    EvidenciaComponent,
    NgbModule,
    MatBadgeModule,
    BreadcrumbComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatBadgeModule,
    MatChipsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
    MatStepperModule,
    MatRadioModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatDividerModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatCardModule,
  ],
  imports: [
    NgbModule,
    MatBadgeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatBadgeModule,
    MatChipsModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
    MatStepperModule,
    MatRadioModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatSliderModule,
    MatDialogModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})  

export class SharedModule {

}
