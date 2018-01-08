
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {KioskComponent} from './kiosk.component'


const route: Routes = [
  {path : '' , component : KioskComponent},
]

export const routing: ModuleWithProviders = RouterModule.forChild(route);
