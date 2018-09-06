import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ReportsComponent } from './reports/reports.component';
import { DetailsComponent } from './details/details.component';
import { ForecastsComponent } from './forecasts/forecasts.component';
import { HomeComponent } from './home/home.component';
import { ReportTableComponent } from './reports/report-table/report-table.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ReportsComponent,
    DetailsComponent,
    ForecastsComponent,
    HomeComponent,
    ReportTableComponent,
    SidenavListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
