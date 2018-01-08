import {Injectable} from '@angular/core'

// import entire SDK
'use strict'
//
import * as uuid from 'uuid'
//
var AWS = require('aws-sdk');
import {DynamoDB} from 'aws-sdk';
import {Config} from 'aws-sdk'

var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'us-east-2_ptjPC8qtX'});
var myConfig = new Config({credentials: myCredentials, region: 'us-east-2'});
//

//Keys
AWS.config.update({
  accessKeyId: 'AKIAJGA75R3GPAMNJZZQ',
  secretAccessKey: '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',
  region: 'us-east-2'
})


let db: any;// = {
//   items: [{
//     products: [
//       {
//         id: 0, location: 1.1, picture: '/assets/img/Vending/products/1-1.png', count: 100,
//         name: 'Pepsi', price: '1.50', info: '/assets/img/Vending/product_info/1-1-info.png',
//         maker: "Pepsi Co", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//         alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//       },
//
//       {
//         id: 1, location: 1.2, picture: '/assets/img/Vending/products/1-2.png', count: 100,
//         name: 'Diet Pepsi', price: '1.50', info: '/assets/img/Vending/product_info/1-2-info.png',
//         maker: "Pepsi Co", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//         alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//       },
//
//       {
//         id: 2, location: 1.3, picture: '/assets/img/Vending/products/1-3.png', count: 100,
//         name: 'Mountain Dew', price: '1.50', info: '/assets/img/Vending/product_info/1-3-info.png',
//         maker: "Pepsi Co", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//         alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//       },
//
//       {
//         id: 3, location: 1.4, picture: '/assets/img/Vending/products/1-4.png', count: 100,
//         name: 'Diet Mountain Dew', price: '1.50', info: '/assets/img/Vending/product_info/1-4-info.png',
//         maker: "Pepsi Co", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//         alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//       },
//
//       {
//         id: 4, location: 1.5, picture: '/assets/img/Vending/products/1-5.png', count: 100,
//         name: 'Mist Twist', price: '1.50', info: '/assets/img/Vending/product_info/1-5-info.png',
//         maker: "Pepsi Co", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//         alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//       },
//
//       {
//         id: 5, location: 4.4, picture: '/assets/img/Vending/products/4-4.png', count: 100,
//         name: 'Snickers', price: '.75', info: '/assets/img/Vending/product_info/4-4-info.png',
//         maker: "Mars", catergory: "candy", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//         alive: false, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//       },
//
//       {
//         id: 6, location: 4.5, picture: '/assets/img/Vending/products/4-5.png', count: 100,
//         name: '3 Musketeers', price: '.75', info: '/assets/img/Vending/product_info/4-5-info.png',
//         maker: "Mars", catergory: "candy", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//         alive: false, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//       }
//     ]
//   },
//     {
//       products: [
//         {
//           id: 8, location: 2.1, picture: '/assets/img/Vending/products/2-1.png', count: 100,
//           name: 'Coca Cola', price: '1.50', info: '/assets/img/Vending/product_info/2-1-info.png',
//           maker: "Coca Cola", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 9, location: 2.2, picture: '/assets/img/Vending/products/2-2.png', count: 100,
//           name: 'Diet Coca Cola', price: '1.50', info: '/assets/img/Vending/product_info/2-2-info.png',
//           maker: "Coca Cola", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 10, location: 2.3, picture: '/assets/img/Vending/products/2-3.png', count: 100,
//           name: 'Mello Yello', price: '1.50', info: '/assets/img/Vending/product_info/2-3-info.png',
//           maker: "Coca Cola", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 11, location: 2.4, picture: '/assets/img/Vending/products/2-4.png', count: 100,
//           name: 'Mello Yello Zero', price: '1.50', info: '/assets/img/Vending/product_info/2-4-info.png',
//           maker: "Coca Cola", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 12, location: 2.5, picture: '/assets/img/Vending/products/2-5.png', count: 100,
//           name: 'Sprite', price: '1.50', info: '/assets/img/Vending/product_info/2-5-info.png',
//           maker: "Coca Cola", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 13, location: 4.4, picture: '/assets/img/Vending/products/4-4.png', count: 100,
//           name: 'Candy 1', price: '.75', info: '/assets/img/Vending/product_info/4-4-info.png',
//           maker: "Mars", catergory: "candy", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: false, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 14, location: 4.5, picture: '/assets/img/Vending/products/4-5.png', count: 100,
//           name: 'Candy 2', price: '.75', info: '/assets/img/Vending/product_info/4-5-info.png',
//           maker: "Mars", catergory: "candy", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: false, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         }
//       ]
//     },
//     {
//       products: [
//         {
//           id: 16, location: 3.1, picture: '/assets/img/Vending/products/3-1.png', count: 100,
//           name: 'Aquafina', price: '1.50', info: '/assets/img/Vending/product_info/3-1-info.png',
//           maker: "Pepsi Co", catergory: "", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 17, location: 3.2, picture: '/assets/img/Vending/products/3-2.png', count: 100,
//           name: 'Dasani', price: '1.50', info: '/assets/img/Vending/product_info/3-2-info.png',
//           maker: "Coca Cola", catergory: "", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 18, location: 3.3, picture: '/assets/img/Vending/products/3-3.png', count: 100,
//           name: 'Cheetos', price: '.75', info: '/assets/img/Vending/product_info/3-3-info.png',
//           maker: "Frito Lay", catergory: "Chips", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 19, location: 3.4, picture: '/assets/img/Vending/products/3-4.png', count: 100,
//           name: 'Flamin` Hot Cheetohs', price: '.75', info: '/assets/img/Vending/product_info/3-4-info.png',
//           maker: "Frito Lay", catergory: "Chips", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 20, location: 3.5, picture: '/assets/img/Vending/products/3-5.png', count: 100,
//           name: 'Doritos', price: '.75', info: '/assets/img/Vending/product_info/3-5-info.png',
//           maker: "Frito Lay", catergory: "Chips", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 21, location: 4.4, picture: '/assets/img/Vending/products/4-4.png', count: 100,
//           name: 'Water 1', price: '.75', info: '/assets/img/Vending/product_info/4-4-info.png',
//           maker: "GWS", catergory: "Water", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: false, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 22, location: 4.5, picture: '/assets/img/Vending/products/4-5.png', count: 100,
//           name: 'Water 2', price: '.75', info: '/assets/img/Vending/product_info/4-5-info.png',
//           maker: "GWS", catergory: "Water", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: false, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         }
//       ]
//     },
//     {
//       products: [
//         {
//           id: 24, location: 4.1, picture: '/assets/img/Vending/products/4-1.png', count: 100,
//           name: 'Fritos', price: '.75', info: '/assets/img/Vending/product_info/4-1-info.png',
//           maker: "Frito Lay", catergory: "Chips", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 25, location: 4.2, picture: '/assets/img/Vending/products/4-2.png', count: 100,
//           name: 'Funyuns', price: '.75', info: '/assets/img/Vending/product_info/4-2-info.png',
//           maker: "Frito Lay", catergory: "Chips", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 26, location: 4.3, picture: '/assets/img/Vending/products/4-3.png', count: 100,
//           name: 'Cracker Jack', price: '.75', info: '/assets/img/Vending/product_info/4-3-info.png',
//           maker: "Frito Lay", catergory: "candy", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 27, location: 4.4, picture: '/assets/img/Vending/products/4-4.png', count: 100,
//           name: 'Snickers', price: '.75', info: '/assets/img/Vending/product_info/4-4-info.png',
//           maker: "Mars", catergory: "candy", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 28, location: 4.5, picture: '/assets/img/Vending/products/4-5.png', count: 100,
//           name: '3 Musketeers', price: '.75', info: '/assets/img/Vending/product_info/4-5-info.png',
//           maker: "Mars", catergory: "candy", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: true, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 29, location: 0.0, picture: '/assets/img/Vending/products/4-4.png', count: 100,
//           name: 'Sample', price: '.75', info: '/assets/img/Vending/product_info/4-4-info.png',
//           maker: "WMU", catergory: "candy", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: false, dateInactive: null, mostPopularDay: " ", leastPopularDay: " ", refillType: ""
//         },
//
//         {
//           id: 30, location: 0.0, picture: '/assets/img/Vending/products/4-5.png', count: 100,
//           name: 'Sample', price: '.75', info: '/assets/img/Vending/product_info/4-5-info.png',
//           maker: "WMU", catergory: "Chips", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
//           alive: false, dateInactive: null, mostPopularDay: " ", leastPopularDay: "  ", refillType: ""
//         }
//       ]
//     }
//   ],
//   methods: {
//     getItem: function (id) {
//       for (let i = 0; i < db.items.length; i++) {
//         for (let j = 0; j < db.items[i].products.length; j++) {
//           if (db.items[i].products[j].id == id) {
//             console.log(i)
//             return db.items[i].products[j];
//           }
//
//         }
//       }
//     },
//     itemBought: function (id) {
//       for (let i = 0; i < db.items.length; i++) {
//         for (let j = 0; j < db.items[i].products.length; j++) {
//           if (db.items[i].products[j].id == id) {
//             return db.items[i].products[j].count--;
//           }
//
//         }
//       }
//     },
//     printhey: function () {
//       return 'hey';
//     }
//
//
//   }
// }


const dynamoDb = new DynamoDB.DocumentClient();

@Injectable()
export class Database {


  constructor() {
    //this.makeDatabase();

  }

  makeDatabase() {


    dynamoDb.query({
      "TableName": "kiosk_a",
      "KeyConditionExpression": "kiosk_id =:id",
      ExpressionAttributeValues: {
        ":id": "201303190425"
      }
    }, function (err, data) {
      //console.log(err)
      if (!err) {
        console.log(data['Items'][0]);
        db = data['Items'][0];
        console.log(db)
      }
    })
  }

  setDB(item){
    db = item;
  }

  buy(item){
    let expression = '';
    for(let i = 0 ; i < db.items.length;i++){
      if(db.items[i].id == item.id && db.items[i].count > 0){

        expression = "SET #i["+i+"].#c = :r";

        let param = {
          "TableName":"kiosk_a",
          "Key":{
            kiosk_id: "201303190425"
          },
          "UpdateExpression": expression,
          "ExpressionAttributeNames":{
            "#i": "items",
            "#c":"count"
          },
          "ExpressionAttributeValues":{
            ":r":item.count - 1,
          }
        }

        dynamoDb.update(param,function(err,data){
          if(err)
            console.log(err)
          else console.log(data);
        })
        console.log(i);
      }
    }
  }

  restock(item, restockNum: number){
    let expression = '';
    for(let i = 0 ; i < db.items.length;i++){
      if(db.items[i].id == item.id && db.items[i].count > 0){

        expression = "SET #i["+i+"].#c = :r";

        let param = {
          "TableName":"kiosk_a",
          "Key":{
            kiosk_id: "201303190425"
          },
          "UpdateExpression": expression,
          "ExpressionAttributeNames":{
            "#i": "items",
            "#c":"count"
          },
          "ExpressionAttributeValues":{
            ":r":restockNum,
          }
        }

        dynamoDb.update(param,function(err,data){
          if(err)
            console.log(err)
          else console.log(data);
        })
        console.log(i);
      }
    }
  }

  changePrice(item, newPrice: number){
    let expression = '';
    for(let i = 0 ; i < db.items.length;i++){
      if(db.items[i].id == item.id && db.items[i].count > 0){

        expression = "SET #i["+i+"].#c = :r";

        let param = {
          "TableName":"kiosk_a",
          "Key":{
            kiosk_id: "201303190425"
          },
          "UpdateExpression": expression,
          "ExpressionAttributeNames":{
            "#i": "items",
            "#c":"price"
          },
          "ExpressionAttributeValues":{
            ":r":newPrice,
          }
        }

        dynamoDb.update(param,function(err,data){
          if(err)
            console.log(err)
          else console.log(data);
        })
        console.log(i);
      }
    }
  }

  itemDivider(p1,p2,p3,p4){
    for(let i = 0; i < db.items.length;i++ ){
      if(i < 4){
        p1.push(db.items[i]);
      }
      if(i >3 && i < 8){
        p2.push(db.items[i]);
      }
      if(i >8 && i < 13){
        p3.push(db.items[i]);
      }
      if(i >15 && i < 21){
        p4.push(db.items[i]);
      }
    }
  }

  getItem(id){
    for(let i = 0; i < db.items.length;i++){
      if(db.items[i].id == id){
        return db.items[i];
      }
    }
  }

  getAllItems(){
    return db.items;
  }

  getDB(){
    return db;
  }
}


//export { dynamoDb }
export {db}



let params = {
  "TableName": "kiosk_a",
  "Item": {
    kiosk_id: "201303190425",
    items: [
      {
        id: 0, location: 1.1, picture: '/assets/img/Vending/products/1-1.png', count: 100,
        name: 'Pepsi', price: '1.50', info: '/assets/img/Vending/product_info/1-1-info.png',
        maker: "Pepsi Co", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 1, location: 1.2, picture: '/assets/img/Vending/products/1-2.png', count: 100,
        name: 'Diet Pepsi', price: '1.50', info: '/assets/img/Vending/product_info/1-2-info.png',
        maker: "Pepsi Co", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 2, location: 1.3, picture: '/assets/img/Vending/products/1-3.png', count: 100,
        name: 'Mountain Dew', price: '1.50', info: '/assets/img/Vending/product_info/1-3-info.png',
        maker: "Pepsi Co", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 3, location: 1.4, picture: '/assets/img/Vending/products/1-4.png', count: 100,
        name: 'Diet Mountain Dew', price: '1.50', info: '/assets/img/Vending/product_info/1-4-info.png',
        maker: "Pepsi Co", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 4, location: 1.5, picture: '/assets/img/Vending/products/1-5.png', count: 100,
        name: 'Mist Twist', price: '1.50', info: '/assets/img/Vending/product_info/1-5-info.png',
        maker: "Pepsi Co", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 5, location: 4.4, picture: '/assets/img/Vending/products/4-4.png', count: 100,
        name: 'Snickers', price: '.75', info: '/assets/img/Vending/product_info/4-4-info.png',
        maker: "Mars", catergory: "candy", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: false, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 6, location: 4.5, picture: '/assets/img/Vending/products/4-5.png', count: 100,
        name: '3 Musketeers', price: '.75', info: '/assets/img/Vending/product_info/4-5-info.png',
        maker: "Mars", catergory: "candy", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: false, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },{
        id: 8, location: 2.1, picture: '/assets/img/Vending/products/2-1.png', count: 100,
        name: 'Coca Cola', price: '1.50', info: '/assets/img/Vending/product_info/2-1-info.png',
        maker: "Coca Cola", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 9, location: 2.2, picture: '/assets/img/Vending/products/2-2.png', count: 100,
        name: 'Diet Coca Cola', price: '1.50', info: '/assets/img/Vending/product_info/2-2-info.png',
        maker: "Coca Cola", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 10, location: 2.3, picture: '/assets/img/Vending/products/2-3.png', count: 100,
        name: 'Mello Yello', price: '1.50', info: '/assets/img/Vending/product_info/2-3-info.png',
        maker: "Coca Cola", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"

      },

      {
        id: 11, location: 2.4, picture: '/assets/img/Vending/products/2-4.png', count: 100,
        name: 'Mello Yello Zero', price: '1.50', info: '/assets/img/Vending/product_info/2-4-info.png',
        maker: "Coca Cola", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 12, location: 2.5, picture: '/assets/img/Vending/products/2-5.png', count: 100,
        name: 'Sprite', price: '1.50', info: '/assets/img/Vending/product_info/2-5-info.png',
        maker: "Coca Cola", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 13, location: 4.4, picture: '/assets/img/Vending/products/4-4.png', count: 100,
        name: 'Candy 1', price: '.75', info: '/assets/img/Vending/product_info/4-4-info.png',
        maker: "Mars", catergory: "candy", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: false, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 14, location: 4.5, picture: '/assets/img/Vending/products/4-5.png', count: 100,
        name: 'Candy 2', price: '.75', info: '/assets/img/Vending/product_info/4-5-info.png',
        maker: "Mars", catergory: "candy", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: false, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },
      {
        id: 16, location: 3.1, picture: '/assets/img/Vending/products/3-1.png', count: 100,
        name: 'Aquafina', price: '1.50', info: '/assets/img/Vending/product_info/3-1-info.png',
        maker: "Pepsi Co", catergory: "na", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 17, location: 3.2, picture: '/assets/img/Vending/products/3-2.png', count: 100,
        name: 'Dasani', price: '1.50', info: '/assets/img/Vending/product_info/3-2-info.png',
        maker: "Coca Cola", catergory: "Soft Drink", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 18, location: 3.3, picture: '/assets/img/Vending/products/3-3.png', count: 100,
        name: 'Cheetos', price: '.75', info: '/assets/img/Vending/product_info/3-3-info.png',
        maker: "Frito Lay", catergory: "Chips", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 19, location: 3.4, picture: '/assets/img/Vending/products/3-4.png', count: 100,
        name: 'Flamin` Hot Cheetohs', price: '.75', info: '/assets/img/Vending/product_info/3-4-info.png',
        maker: "Frito Lay", catergory: "Chips", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 20, location: 3.5, picture: '/assets/img/Vending/products/3-5.png', count: 100,
        name: 'Doritos', price: '.75', info: '/assets/img/Vending/product_info/3-5-info.png',
        maker: "Frito Lay", catergory: "Chips", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 21, location: 4.4, picture: '/assets/img/Vending/products/4-4.png', count: 100,
        name: 'Water 1', price: '.75', info: '/assets/img/Vending/product_info/4-4-info.png',
        maker: "GWS", catergory: "Water", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: false, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 22, location: 4.5, picture: '/assets/img/Vending/products/4-5.png', count: 100,
        name: 'Water 2', price: '.75', info: '/assets/img/Vending/product_info/4-5-info.png',
        maker: "GWS", catergory: "Water", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: false, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 24, location: 4.1, picture: '/assets/img/Vending/products/4-1.png', count: 100,
        name: 'Fritos', price: '.75', info: '/assets/img/Vending/product_info/4-1-info.png',
        maker: "Frito Lay", catergory: "Chips", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 25, location: 4.2, picture: '/assets/img/Vending/products/4-2.png', count: 100,
        name: 'Funyuns', price: '.75', info: '/assets/img/Vending/product_info/4-2-info.png',
        maker: "Frito Lay", catergory: "Chips", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 26, location: 4.3, picture: '/assets/img/Vending/products/4-3.png', count: 100,
        name: 'Cracker Jack', price: '.75', info: '/assets/img/Vending/product_info/4-3-info.png',
        maker: "Frito Lay", catergory: "candy", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 27, location: 4.4, picture: '/assets/img/Vending/products/4-4.png', count: 100,
        name: 'Snickers', price: '.75', info: '/assets/img/Vending/product_info/4-4-info.png',
        maker: "Mars", catergory: "candy", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na ", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 28, location: 4.5, picture: '/assets/img/Vending/products/4-5.png', count: 100,
        name: '3 Musketeers', price: '.75', info: '/assets/img/Vending/product_info/4-5-info.png',
        maker: "Mars", catergory: "candy", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: true, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 29, location: 0.0, picture: '/assets/img/Vending/products/4-4.png', count: 100,
        name: 'Sample', price: '.75', info: '/assets/img/Vending/product_info/4-4-info.png',
        maker: "WMU", catergory: "candy", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: false, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      },

      {
        id: 30, location: 0.0, picture: '/assets/img/Vending/products/4-5.png', count: 100,
        name: 'Sample', price: '.75', info: '/assets/img/Vending/product_info/4-5-info.png',
        maker: "WMU", catergory: "Chips", dateAdded: new Date(), numbersSold: 0, salesByDate: [],
        alive: false, dateInactive: null, mostPopularDay: "na", leastPopularDay: "na", refillType: "na"
      }
    ],
    ads:[
      {
        name:'ad1',
        url: '4.jpg',
      },
      {
        name:'ad2',
        url: '5.jpg',
      },
      {
        name:'ad3',
        url: '6.jpg',
      },
      {
        name:'ad4',
        url: '7.jpg',
      },
      {
        name:'ad5',
        url: '8.jpg',
      },
      {
        name:'ad6',
        url: '9.jpg',
      }
    ]

  }
}

dynamoDb.put(params, function (err, data) {
  console.log(err)
  if (err) console.log(err);
  else console.log(data);
});
