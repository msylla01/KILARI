import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionServiceComponent } from './gestion-service.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '',
   component: GestionServiceComponent
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [GestionServiceComponent]
})
export class GestionServiceModule { }
