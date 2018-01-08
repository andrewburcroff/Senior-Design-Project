
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AdsComponent} from './ads.component';


const route: Routes = [
  {path : '' , component : AdsComponent},
]

export const routing: ModuleWithProviders = RouterModule.forChild(route);
