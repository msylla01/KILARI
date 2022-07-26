import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { Create1Component } from './create1/create1.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'plan', redirectTo: 'plan/index', pathMatch: 'full'},
  {path: 'plan/index', component:IndexComponent},
  { path: 'plan/create',component: CreateComponent},
  { path: 'plan/create1',component: Create1Component},
  { path: 'plan/:planId/view', component: ViewComponent},
  {path: 'rai/:planId/edit',component: EditComponent},	
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanactionraiRoutingModule { }
