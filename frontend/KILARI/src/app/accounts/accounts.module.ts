import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule
  ],

})
export class AccountsModule { }
