import { Component, ViewEncapsulation } from '@angular/core';
import {Database, db} from "./database.service";
import {Router} from "@angular/router";
import {PersistenceService, StorageType} from "angular-persistence";

//import {dynamoDb} from './database.service';
'use strict'
//
import * as uuid from 'uuid'
//
var AWS = require('aws-sdk');

//Keys
AWS.config.update({
  accessKeyId: 'AKIAJGA75R3GPAMNJZZQ',
  secretAccessKey: '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',
  region: 'us-east-2'
})


let s3 = new AWS.S3({'Bucket':"kiosk-pictures","region":"us-east-2"});
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,

})


export class AppComponent {
  title = 'app';
  url = 'google.com'
  private item: any;
  accessKey: string;
  loadFlag: boolean = false;


  constructor(private db: Database, private router: Router,private _perService: PersistenceService) {
    this.refreshAvatar();
    db.makeDatabase();

    setTimeout(()=>{
      this.loadFlag = true;
      console.log("Set Time Change")
    },2000)

   // console.log(db.makeDatabase())
   this.accessKey = this._perService.get('accessKey', StorageType.LOCAL);


  }

  loadingImg:any;
  refreshAvatar() {
    s3.getSignedUrl('getObject', {"Bucket":"kiosk-pictures",'Key': 'Animations/' + "loading.gif"}, (err, url) => {
      this.loadingImg = url;
      if(err){
        console.log(err)
      }
      else{
        console.log(url)
      }
    });
  }

}
