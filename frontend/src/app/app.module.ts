import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';

import { HttpClientModule } from '@angular/common/http'
import { ApiserviceService } from './apiservice.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs'

import { DashboardComponent } from './dashboard/dashboard.component';
import { TodayComponent } from './today/today.component';
import { ApplyComponent } from './apply/apply.component';
import { DoneComponent } from './done/done.component';
import { DialogComponent } from './dialog/dialog.component';
import { ShiftaddComponent } from './shiftadd/shiftadd.component'
import { DatePipe } from '@angular/common';
import { AppliedformComponent } from './appliedform/appliedform.component';
import { ReapplyComponent } from './reapply/reapply.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    DashboardComponent,
    TodayComponent,
    DoneComponent,
    DialogComponent,
    ShiftaddComponent,
    ApplyComponent,
    AppliedformComponent,
    ReapplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatDividerModule,
    MatTabsModule
  ],
  providers: [ApiserviceService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
