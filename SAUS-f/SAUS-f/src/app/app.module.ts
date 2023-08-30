import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { HealthUnitComponent } from './components/health-unit/health-unit.component';
import { SchedulingComponent } from './components/scheduling/scheduling.component'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import { BarAdminComponent } from './components/bar-admin/bar-admin.component';
import { NewHealthUnitComponent } from './components/bar-admin/forms/new-health-unit/new-health-unit.component';
import { NewDoctorComponent } from './components/bar-admin/forms/new-doctor/new-doctor.component';
import { ChangeHealthUnitComponent } from './components/home/change-health-unit/change-health-unit.component';
import { ChangeDoctorComponent } from './components/health-unit/change-doctor/change-doctor.component';
import { ChangeSchedulingComponent } from './components/health-unit/change-scheduling/change-scheduling.component';

//Todos os imports e bibliotecas  usados no projeto

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HealthUnitComponent,
    SchedulingComponent,
    BarAdminComponent,
    NewHealthUnitComponent,
    NewDoctorComponent,
    ChangeHealthUnitComponent,
    ChangeDoctorComponent,
    ChangeSchedulingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    FlexLayoutModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
