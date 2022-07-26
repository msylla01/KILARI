import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionPlateformeComponent } from './gestion-plateforme.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '',
   component: GestionPlateformeComponent
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [GestionPlateformeComponent]
})
export class GestionPlateformeModule { }
