import {Component, NgModule} from '@angular/core';
import {Database} from "../database.service";
import {PersistenceService, StorageType} from "angular-persistence";
import {Router} from "@angular/router";



@Component({
  templateUrl: 'kiosk.component.html' ,
  styleUrls: ['kiosk.component.css'],
})

export class KioskComponent {
  iframe: any;

  accessKey: any;
  constructor(private db:Database, private _perService: PersistenceService, public _router: Router){
   this.accessKey = this._perService.get('accessKey', StorageType.LOCAL);
  }


  navToRegister(){
    this._router.navigate(['maintenance']);
  }

}
