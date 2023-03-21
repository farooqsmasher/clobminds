import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { LoginComponent } from './components/login/login.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component'
import { CreateNewComponent } from './components/create-new/create-new.component';
const routes: Routes = [

  { path: 'add', component: AddUserComponent },
  {redirectTo:'' ,path:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'create-new', component:CreateNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],  
})
export class AppRoutingModule { }
