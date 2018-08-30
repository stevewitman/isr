import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ReportsComponent } from './reports/reports.component';

  const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'reports', component: ReportsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
