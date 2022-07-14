import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { LoyoutGlobalComponent } from './loyout-global/loyout-global.component';
import { HomeComponent } from './shared/home/home.component';
import {AuthGuard} from './services/auth.guard'

const routes: Routes = [

{
  path: 'login-kilari',
  component:LoginComponent,
  children:[
    {
      path: '',
      redirectTo: 'auth',
      pathMatch: 'full'
    },
    {
      path: 'auth',
      loadChildren: () => import('./login/login.module').then(module => module.LoginModule)
    },
  ]
},
{
  path: '',
  component:LoyoutGlobalComponent,
  children: [
    {
      path: '',
      redirectTo: 'tableau-de-bord',
      pathMatch: 'full'
    },
    {
      path: 'tableau-de-bord',
      loadChildren: () => import('./pages/dashboard/dashboard.module').then(module => module.DashboardModule),
      canLoad: [AuthGuard]
    },
    {
      path: 'gestion-rai',
      loadChildren: () => import('./pages/rai/rai.module').then(module => module.RaiModule),
      canLoad: [AuthGuard]
    },

    {
      path: 'gestion-bqt',
      loadChildren: () => import('./pages/Bqt/Bqt.module').then(module => module.BqtModule),
      canLoad: [AuthGuard]
    },
    {
      path: 'plan-action-rai',
      loadChildren: () => import('./pages/plan-rai/plan-rai.module').then(module => module.PlanRaiModule),
      canLoad: [AuthGuard]
    },
    {
      path: 'plan-action-bqt',
      loadChildren: () => import('./pages/Plan-bqt/Plan-bqt.module').then(module => module.PlanBqtModule),
      canLoad: [AuthGuard]
    },
    {
      path: 'gestion-user',
      loadChildren: () => import('./pages/gestion-user/gestion-user.module').then(module => module.GestionUserModule),
      canLoad: [AuthGuard]
    },
    {
      path: 'gestion-plate-forme',
      loadChildren: () => import('./pages/gestion-plateforme/gestion-plateforme.module').then(module => module.GestionPlateformeModule),
      canLoad: [AuthGuard]
    },
    {
      path: 'gestion-servce',
      loadChildren: () => import('./pages/gestion-service/gestion-service.module').then(module => module.GestionServiceModule),
      canLoad: [AuthGuard]
    },
    {
      path: 'gestion-pays',
      loadChildren: () => import('./pages/gestion-pays/gestion-pays.module').then(module => module.GestionPaysModule),
      canLoad: [AuthGuard]
    }
  ]
},
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
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
