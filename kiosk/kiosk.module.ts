/**
 * Created by wakdev on 5/17/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {routing} from './kiosk.routing';
import { SafePipe } from '../safe.pipe';
import {AdsComponent} from '../ads/ads.component'
import {VendingComponent} from '../vending/vending.component'
import {WebviewerComponent} from '../webViewer/webViewer.component';
import { ModalComponent } from '../vending/model.component';
import {KioskComponent} from './kiosk.component';
// import { RegisterComponent } from '../register/register.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
    AdsComponent,
    SafePipe,
    VendingComponent,
    WebviewerComponent,
    ModalComponent,
    KioskComponent,
    // RegisterComponent
  ],
})
export class KioskModule { }

