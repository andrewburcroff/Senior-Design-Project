import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { Database } from './database.service';
import { RegisterComponent } from './register/register.component';
import {PersistenceModule} from 'angular-persistence';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import 'hammerjs';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MaterialModule,
    // NgbModule,
    CarouselModule.forRoot(),
    PersistenceModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,

  ],
  providers: [
    Database
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
