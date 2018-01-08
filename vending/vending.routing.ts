
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {VendingComponent} from './vending.component';


const route: Routes = [
  // {path : 'vending' , component : VendingComponent},
]

export const routing: ModuleWithProviders = RouterModule.forChild(route);
