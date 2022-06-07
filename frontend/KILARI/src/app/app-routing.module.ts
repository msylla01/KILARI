import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
 
{path: '', component:FullComponent},
{path: 'home', component:HomeComponent},
/*{path: 'raindex', component:HomepageComponent},*/
 
{path: 'rai/',loadChildren: () => import('./rai/rai.module').then(mod => mod.RaiModule)},
{path: 'account/',loadChildren: () => import('./accounts/accounts.module').then(mod => mod.AccountsModule)},
       
 
/***********  user*/
/**{ path: 'user', redirectTo: 'user/index', pathMatch: 'full'},
{path: 'user/index', component:IndexComponent},
{ path: 'user/:userId/view', component: ViewComponent },
{ path: 'user/create', component: CreateComponent },
{ path: 'user/:userId/edit', component: EditComponent },**/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
