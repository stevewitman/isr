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
import { TabsComponent } from './tabs/tabs.component';
import { ReportTableComponent } from './report-table/report-table.component';
import { ForecastTableComponent } from './forecast-table/forecast-table.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { LinkTableComponent } from './link-table/link-table.component';
import { StatTableComponent } from './stat-table/stat-table.component';
import { AdImageComponent } from './ad-image/ad-image.component';
import { NewsComponent } from './news/news.component';
import { ReportService } from './report.service';
import { SnowDepthDirective } from './snow-depth.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TabsComponent,
    ReportTableComponent,
    ForecastTableComponent,
    DetailsComponent,
    HomeComponent,
    SidenavListComponent,
    HeaderComponent,
    LinkTableComponent,
    StatTableComponent,
    AdImageComponent,
    NewsComponent,
    SnowDepthDirective
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
  providers: [
    ReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
