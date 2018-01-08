/**
 * Created by adithyavinayak on 3/24/17.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from "./register/register.component";




////////Everytime when we create a new page we simply add the name of the url under the path ,which we need use for the page and the
////////component name under the component which is to be loaded
// If we need to create a new path for module we do lazy loading which has the following syntax
// {path :'url_name' , loadChildren : 'path_to_module'}

const routes: Routes = [
  {
  path: '',
    loadChildren: 'app/kiosk/kiosk.module#KioskModule',
  },
  {
  path: 'webs',
    loadChildren: 'app/webViewer/webViewer.module#WebviewerModule',
  },
  {
  path: 'vending',
    loadChildren: 'app/vending/vending.module#VendingModule',
  },
  {
    path: 'maintenance',
    loadChildren: 'app/maintenance/maintenance.module#MaintenanceModule',
  },
  {
    path: 'register',
    component: RegisterComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
