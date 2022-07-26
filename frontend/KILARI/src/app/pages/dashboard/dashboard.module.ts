import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';

const routes: Routes = [
  { path: '',
   component: DashboardComponent
  },
];

@NgModule({
  imports: [
    FormsModule,
    NgxEchartsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
