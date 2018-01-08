/**
 * Created by wakdev on 5/17/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WebviewerComponent} from './webViewer.component';
import {FormsModule} from '@angular/forms';
import {routing} from './webViewer.routing';
import { SafePipe } from '../safe.pipe';
import { ModalComponent } from '../vending/model.component';
import { HttpModule, JsonpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
  ],
  declarations: [
    WebviewerComponent,
    SafePipe,
    ModalComponent,
    HttpModule,
    JsonpModule
  ],
})
export class WebviewerModule {}
