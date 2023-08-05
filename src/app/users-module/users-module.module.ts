import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModuleRoutingModule } from './users-module-routing.module';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {MatMenuModule} from '@angular/material/menu';
import { EmployeDetailComponent } from './employe-detail/employe-detail.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DocumentsComponent } from './documents/documents.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    SideBarComponent,
    EmployeDetailComponent,
    DocumentsComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    UsersModuleRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
    
  ]
})
export class UsersModuleModule { }
