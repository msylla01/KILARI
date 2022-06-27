import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanBqtComponent } from './Plan-bqt.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '',
   component: PlanBqtComponent
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
  ],
  declarations: [PlanBqtComponent]
})
export class PlanBqtModule { }
