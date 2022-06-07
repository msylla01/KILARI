import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  /***********  rai*/


  { path: 'rai', redirectTo: 'rai/index', pathMatch: 'full'},
  {path: 'rai/index', component:IndexComponent},
  { path: 'rai/create',component: CreateComponent},
  { path: 'rai/:RaiId/view', component: ViewComponent},
  {path: 'rai/:RaiId/edit',component: EditComponent},	
  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaiRoutingModule { }
