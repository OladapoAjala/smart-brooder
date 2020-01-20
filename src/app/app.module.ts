import { ToastrService } from './service/toastr.service';
import { appRoutes } from './routes/routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SwitchComponent } from './components/switch/switch.component';
import { Node1TempComponent } from './components/node1-temp/node1-temp.component';
import { Node1HumComponent } from './components/node1-hum/node1-hum.component';

// fusion charts importations

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { FusionChartsModule } from 'angular-fusioncharts';

import * as Widgets from 'fusioncharts/fusioncharts.widgets';

// Load FusionTheme Theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme, Charts);




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SwitchComponent,
    Node1TempComponent,
    Node1HumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FusionChartsModule,
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
