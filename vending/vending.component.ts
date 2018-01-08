import {Component} from '@angular/core';
import {db, Database} from '../database.service';
export class Product {
  id: number;
  picture: string;
  name: string;
  price: string;
  info: string;
  count: number;
}

// product id corresponds to it's col/row location in the grid

@Component({
  selector: 'app-vending',
  templateUrl: 'vending.component.html',
  styleUrls: ['vending.component.css'],
})


export class VendingComponent {
  products1:any = [];
  products2:any = [];
  products3:any = [];
  products4:any = [];
  totalCountForDay = [];


  selectedProduct: any = {};

  onSelect(product: Product): void {
    this.selectedProduct = product;
    let modal = document.getElementById('modal');
    modal.style.visibility = 'true';
    console.log(this.selectedProduct)
  }
  constructor(private _dbService: Database) {
    //console.log(db.items[0])

    if(!db){
      const db = this._dbService.getDB();
      _dbService.itemDivider(this.products1,this.products2,this.products3,this.products4);
    }else{
      _dbService.itemDivider(this.products1,this.products2,this.products3,this.products4);
    }
    console.log(this.products1);
    console.log(this.products2);
    console.log(this.products3);
    console.log(this.products4);
  }

  countFlag: boolean = false;
  printhey(product){

  }

  buy(){
    this._dbService.buy(this.selectedProduct);
   // this.totalCountForDay[this.selectedProduct.id] =
  }

  // itemDivider(p1,p2,p3,p4){
  //   for(let i = 0; i < db.items.length;i++ ){
  //     if(i < 5){
  //       p1.push(db.items[i]);
  //     }
  //     if(i >4 && i < 10){
  //       p2.push(db.items[i]);
  //     }
  //     if(i >9 && i < 15){
  //       p3.push(db.items[i]);
  //     }
  //     if(i >15 && i < 21){
  //       p4.push(db.items[i]);
  //     }
  //   }
  // }

}
