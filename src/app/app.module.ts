import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { DashboardRoutingModule } from './routing/dashboard-routing.module';
import { DashboardService } from './dashboard/dashboard.service';
import { CommonModule } from '@angular/common'; 
import { BarChartComponent } from 'app/barchart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ChartsModule,
    RouterModule,
    DashboardRoutingModule,
    MaterialModule,
    ChartsModule
  ],
  providers: [
    DashboardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
