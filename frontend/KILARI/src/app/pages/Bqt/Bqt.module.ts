import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BqtComponent } from './Bqt.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '',
   component: BqtComponent
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
  ],
  declarations: [	BqtComponent,
   ]
})
export class BqtModule { }
