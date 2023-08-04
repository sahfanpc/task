import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './users-module/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',loadChildren: () => import('./users-module/users-module.module').then(mod => mod.UsersModuleModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
