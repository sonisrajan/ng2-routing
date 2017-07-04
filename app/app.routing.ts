import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {NotFoundComponent} from './not-found/not-found.component';

const appRoutes=[
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        loadChildren:'app/about/about.module#AboutModule'
    },
    {
        path:'dashboard',
        loadChildren:'app/dashboard/dashboard.module#DashboardModule'
    },
    {path:'contact',component:ContactComponent},
    {path:'**',component:NotFoundComponent},
   
];
export const appRouting:ModuleWithProviders=RouterModule.forRoot(appRoutes);