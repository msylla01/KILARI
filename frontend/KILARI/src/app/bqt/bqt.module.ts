import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BqtRoutingModule } from './bqt-routing.module';
import { ViewbqtComponent } from './viewbqt/viewbqt.component';
import { CreatebqtComponent } from './createbqt/createbqt.component';
import { EditbqtComponent } from './editbqt/editbqt.component';
import { IndexbqtComponent } from './indexbqt/indexbqt.component';


@NgModule({
  declarations: [
    ViewbqtComponent,
    CreatebqtComponent,
    EditbqtComponent,
    IndexbqtComponent
  ],
  imports: [
    CommonModule,
    BqtRoutingModule
  ]
})
export class BqtModule { }
