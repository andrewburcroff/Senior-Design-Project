/**
 * Created by wakdev on 5/17/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {routing} from './ads.routing';
import { SafePipe } from '../safe.pipe';
import {AdsComponent} from './ads.component'
import {VendingComponent} from '../vending/vending.component'
import {WebviewerComponent} from '../webViewer/webViewer.component';
import { ModalComponent } from '../vending/model.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DynamoDB } from '../../aws.dynambo';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    NgbModule,
    CarouselModule.forRoot()
  ],
  declarations: [
    AdsComponent,
    SafePipe,
    VendingComponent,
    WebviewerComponent,
    ModalComponent
  ],
  providers:
  [
    DynamoDB
  ]
})
export class AdsModule { }
