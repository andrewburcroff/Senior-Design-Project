import {Component } from '@angular/core';
import {Router} from '@angular/router';
import {db} from '../database.service';


@Component({
  selector: 'app-vending',
  templateUrl: 'maintenance.component.html',
  styleUrls: ['maintenance.component.css'],
})


export class MaintenanceComponent {
credentials = { username: "Kiosk", password: 'Kiosk123'};
wrongFlag: boolean = false;
  constructor(private _router:Router){}

  onSubmit(login){
    console.log(login.value.first);

    if(login.value.first == this.credentials.username && login.value.password == this.credentials.password){
      this._router.navigate(['maintenance/update'])
    }else{
      this.wrongFlag = true;
    }
  }

  back(){
    this._router.navigate(['']);
  }


}

