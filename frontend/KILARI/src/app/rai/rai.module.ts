import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaiRoutingModule } from './rai-routing.module';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListfilterPipe } from '../pipe/listfilter.pipe';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    ViewComponent,
    CreateComponent,
    EditComponent,
    ListfilterPipe,
    IndexComponent
  ],
  imports: [
    CommonModule,
    RaiRoutingModule,
    FormsModule,
    ReactiveFormsModule,SharedModule
  ],

})
export class RaiModule { }
