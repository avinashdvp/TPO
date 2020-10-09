import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MaterialModule } from './material/material.module';
import{MatSelectModule} from'@angular/material/select';
import{ MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { HighchartsChartModule } from 'highcharts-angular';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { IncrementalsalesVolumeComponent } from './incrementalsales-volume/incrementalsales-volume.component';





@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component,
    IncrementalsalesVolumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    NgxCsvParserModule,
    MatSidenavModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
