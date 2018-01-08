import {Component} from '@angular/core';
import {Database, db} from '../../database.service';

import {Router} from "@angular/router";

@Component({
  selector: 'update',
  templateUrl: 'update.component.html',
  styleUrls: ['update.component.css'],
})


export class UpdateComponent {
  selectedProduct: any = {};
  products1: any = [];
  products2: any = [];
  products3: any = [];
  products4: any = [];


  restock: number;
  newPrice:any;

  constructor(private _router: Router, private _dbService:Database) {
    this.itemDivider();
    console.log(this.products1)
  }

  // onSubmit(login){
  //   console.log(login.value);
  //   this._router.navigate(['maintenance/update']);
  // }

  onSelect(product: any): void {
    this.selectedProduct = product;
    let modal = document.getElementById('modal');
    modal.style.visibility = 'true';
    console.log(this.selectedProduct)
  }

  printhey(item?) {
    console.log(item);
  }

  restockConfirm(modal1, modal2, modal3) {
    this.selectedProduct.count = this.restock;
    //this.updateCountnInDB();
    this._dbService.restock(this.selectedProduct,this.restock);

    modal1.hide();
    modal2.hide();
    modal3.show();
    console.log(modal3);
  }

  updatePrice(modal1,modal2,modal3){
    this.selectedProduct.price = this.newPrice;
    this._dbService.changePrice(this.selectedProduct,this.newPrice);

    modal1.hide();
    modal2.hide();
    modal3.show();
  }

  setRestock(item) {
    console.log(item.value)
  }

  updateCountnInDB(){
    for(let i = 0; i < db.items.length;i++){
      for(let j = 0; j < db.items[i].length;j++){

        if(db.item[i][j].id == this.selectedProduct.id){
          db.item[i][j].count = this.selectedProduct.count;
        }
      }
    }
  }

  updatePricenInDB(){
    for(let i = 0; i < db.items.length;i++){
      for(let j = 0; j < db.items[i].length;j++){

        if(db.item[i][j].id == this.selectedProduct.id){
          db.item[i][j].count = this.selectedProduct.count;
        }
      }
    }
  }

  backToVending(){
    this._router.navigate([''])
  }

  navToStats(id){
    this._router.navigate(['maintenance/stats',{id: id}]);
  }

  navToExchange(id){
    this._router.navigate(['maintenance/exchange',{id: id}]);
  }
  navToItemExchange(){

  }

  navToImgReplacer(){

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

  navToRegistery(){
    this._router.navigate(['register'])
  }

}
