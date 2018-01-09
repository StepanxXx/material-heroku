import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { ChartService } from './services/chart.service';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './components/weather/weather.component';
import { MaterialFormComponent } from './components/material-form/material-form.component';



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MaterialFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WeatherService, ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
