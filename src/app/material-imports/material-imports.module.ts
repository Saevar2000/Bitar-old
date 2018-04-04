import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatListModule,
  MatRippleModule,
  MatMenuModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';

const COMPONENTS = [
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatListModule,
  MatRippleModule,
  MatMenuModule,
  MatInputModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS
})
export class MaterialImportsModule { }