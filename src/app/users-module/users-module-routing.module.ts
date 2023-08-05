import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeDetailComponent } from './employe-detail/employe-detail.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'clients',component:EmployeDetailComponent},
    {path:'documents',component:DocumentsComponent}
  ]}
  // {path:'',component:HomepageComponent,children: [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersModuleRoutingModule { }
