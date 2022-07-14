import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionUserComponent } from './gestion-user.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from '../../DemoNgZorroAntdModule';

const routes: Routes = [
  { path: '',
   component: GestionUserComponent
  },
];

@NgModule({
  imports: [
    DemoNgZorroAntdModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [GestionUserComponent]
})
export class GestionUserModule { }
