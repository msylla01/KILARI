import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanactionraiRoutingModule } from './planactionrai-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ListfilterPipe } from '../pipe/listfilter.pipe';
import { FilterplanPipe } from '../pipe/filterplan.pipe';
import { Create1Component } from './create1/create1.component';


@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    EditComponent,
    CreateComponent,
    FilterplanPipe,
    Create1Component

  ],
  imports: [
    CommonModule,
    PlanactionraiRoutingModule,
    FormsModule,
    ReactiveFormsModule,SharedModule
  ]
})
export class PlanactionraiModule { }
