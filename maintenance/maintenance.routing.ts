
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MaintenanceComponent} from './maintenance.component';
import {UpdateComponent} from "./update/update.component";
import {StatsComponent} from "./item-stats/statistics.component";
import {ExchangeComponent} from "./item-exchange/exchange.component";
import {ImgReplacerComponent} from "./img-replacer/newimage.component";


const route: Routes = [
   {path : '', component : MaintenanceComponent},
   {path : 'update', component : UpdateComponent},
   {path : 'stats', component : StatsComponent},
   {path : 'imageselector', component : ImgReplacerComponent},
   {path : 'exchange', component : ExchangeComponent}
]

export const routing: ModuleWithProviders = RouterModule.forChild(route);
