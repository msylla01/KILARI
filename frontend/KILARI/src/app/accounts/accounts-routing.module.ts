import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'account', redirectTo: 'account/login', pathMatch: 'full'},
  {path: 'account/login', component:LoginComponent},
  { path: 'account/register',component: RegisterComponent},
  { path: 'account/:userId/view', component: ViewComponent},
  {path: 'account/:userId/edit',component: EditComponent},	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
