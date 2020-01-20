import { DashboardComponent } from './../components/dashboard/dashboard.component';
import { Routes } from '@angular/router'

export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
]