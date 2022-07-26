import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionPaysComponent } from './gestion-pays.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from '../../DemoNgZorroAntdModule';

const routes: Routes = [
  { path: '',
   component: GestionPaysComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    DemoNgZorroAntdModule
  ],
  declarations: [GestionPaysComponent]
})
export class GestionPaysModule { }
