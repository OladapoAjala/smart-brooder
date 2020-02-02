import { ToastrService } from './service/toastr.service';
import { appRoutes } from './routes/routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Switch sensor
import { SwitchComponent } from './components/switch/switch.component';

// Temperature sesnors
import { Node1TempComponent } from './components/node1-temp/node1-temp.component';
import { Node2TempComponent } from './components/node2-temp/node2-temp.component';
import { Node3TempComponent } from './components/node3-temp/node3-temp.component';
import { Node4TempComponent } from './components/node4-temp/node4-temp.component';
import { Node5TempComponent } from './components/node5-temp/node5-temp.component';

// Humidiity sensors
import { Node1HumComponent } from './components/node1-hum/node1-hum.component';
import { Node5HumComponent } from './components/node5-hum/node5-hum.component';
import { Node4HumComponent } from './components/node4-hum/node4-hum.component';
import { Node3HumComponent } from './components/node3-hum/node3-hum.component';
import { Node2HumComponent } from './components/node2-hum/node2-hum.component';

// fusion charts importations

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { FusionChartsModule } from 'angular-fusioncharts';

import * as Widgets from 'fusioncharts/fusioncharts.widgets';

// Load FusionTheme Theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme, Charts);




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SwitchComponent,
    Node1TempComponent,
    Node1HumComponent,
    Node2TempComponent,
    Node3TempComponent,
    Node4TempComponent,
    Node5TempComponent,
    Node5HumComponent,
    Node4HumComponent,
    Node3HumComponent,
    Node2HumComponent
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
