import {Component} from '@angular/core';
import {Database, db} from '../../database.service';

import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'update',
  templateUrl: 'exchange.component.html',
  styleUrls: ['exchange.component.css'],
})


export class ExchangeComponent {
  selectedProduct: any;
  currentID: any;
  params: any;
  newProduct: any;
  switchFlag: boolean = false;

  constructor(private _router: Router, private _routeparams: ActivatedRoute, private _dbService: Database) {
    this.params = this._routeparams.params['_value'];
    this.currentID = this.params['id'];

    this.selectedProduct = this._dbService.getItem(this.currentID);

    //console.log(db.methods.getItem(this.currentID))
    this.parseLocation();
     this.allItem();
    // console.log(this.allItems);
  }
location = {row:'',col:''};

  parseLocation(){
    let loc = this.selectedProduct.location.toString();
   // console.log(loc.substring(2,3));
    this.location.col = loc.substring(2,3);
    this.location.row = loc.substring(0,1);
  }
  allItems: any;

  allItem(){
    this.allItems = this._dbService.getAllItems();

  }
  onSelect(item){
    this.newProduct = item;
  }

  switchButton(){
    this.switchFlag = true;

    let temp = this.selectedProduct;
    this.selectedProduct = this.newProduct;
    this.newProduct = temp;
  }

  cancel(){
    this.switchFlag = false;
    let temp = this.newProduct;
    this.newProduct = this.selectedProduct;
    this.selectedProduct = temp;
  }

confirm(){
    alert("You have successfully switched items");
}

  back(){
  this._router.navigate(['maintenance/update']);
}

}
