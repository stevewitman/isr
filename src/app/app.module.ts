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
import { ViewsComponent } from './views/views.component';
import { ReportTableComponent } from './views/report-table/report-table.component';
import { ForecastTableComponent } from './views/forecast-table/forecast-table.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { LinkTableComponent } from './views/link-table/link-table.component';
import { StatTableComponent } from './views/stat-table/stat-table.component';
import { AdImageComponent } from './views/ad-image/ad-image.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ViewsComponent,
    ReportTableComponent,
    ForecastTableComponent,
    DetailsComponent,
    HomeComponent,
    SidenavListComponent,
    HeaderComponent,
    LinkTableComponent,
    StatTableComponent,
    AdImageComponent
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
