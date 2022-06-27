import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaiComponent } from './rai.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '',
   component: RaiComponent
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
  ],
  declarations: [RaiComponent]
})
export class RaiModule { }
