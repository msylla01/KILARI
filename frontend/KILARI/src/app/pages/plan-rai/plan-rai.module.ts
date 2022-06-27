import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanRaiComponent } from './plan-rai.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '',
   component: PlanRaiComponent
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
  ],
  declarations: [PlanRaiComponent]
})
export class PlanRaiModule { }
