import {Component} from '@angular/core';
import {db} from '../../database.service';
import {Router, ActivatedRoute} from '@angular/router'
import {MacAddress} from "aws-sdk/clients/sms";

@Component({
  selector: 'update',
  templateUrl: 'statistics.component.html',
  styleUrls: ['statistics.component.css'],
})


export class StatsComponent {
  selectedProduct: any = {};
  products1: any = [];
  products2: any = [];
  products3: any = [];
  products4: any = [];

  restock: number;
  newPrice: any;

  params:any;
  currentID :any;
  currentItem: any;
  location = {row:-1,col:-1};
  today = new Date();

  constructor(private _router: Router, private _routeparams: ActivatedRoute) {
    this.itemDivider();
    console.log(this.today)
    this.params = this._routeparams.params['_value'];
    this.currentID = this.params['id'];
    console.log(this.currentID);
    this.findID();
    this.parseLocation();

    console.log()

    console.log('Testing DB Stored Methods');
    //console.log(db.methods.getItem(0));

  }

  findID(){
    console.log('In Use')
    console.log( db.items);
    // console.log(db.items[0].products)
    for(let i = 0; i < db.items.length;i++){
      //for(let j = 0 ; j < db.items[i].products.length;j++){

        if(db.items[i].id == this.currentID){
          console.log(db.items[i]);
          this.currentItem = db.items[i];
        }

      //}
    }
  }

  parseLocation(){
    let loc = this.currentItem.location.toString();
    console.log(loc.substring(2,3));
    this.location.col = loc.substring(2,3);
    this.location.row = loc.substring(0,1);
  }
  backButton(){
    this._router.navigate(['maintenance/update']);
  }
  itemDivider(){
    for(let i = 0; i < db.items.length;i++ ){
      if(i < 5){
        this.products1.push(db.items[i]);
      }
      if(i >4 && i < 10){
        this.products2.push(db.items[i]);
      }
      if(i >9 && i < 15){
        this.products3.push(db.items[i]);
      }
      if(i >15 && i < 21){
        this.products4.push(db.items[i]);
      }
    }
  }
}
