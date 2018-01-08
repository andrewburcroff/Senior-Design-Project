
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {WebviewerComponent} from './webViewer.component';


const route: Routes = [
    {path : '' , component : WebviewerComponent},
  ]

export const routing: ModuleWithProviders = RouterModule.forChild(route);
