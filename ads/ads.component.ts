import { Component } from '@angular/core';
import {db, Database} from '../database.service';


'use strict'
//
import * as uuid from 'uuid'
//
var AWS = require('aws-sdk');

//Keys


let s3 = new AWS.S3({'Bucket':"kiosk-pictures","region":"us-east-2"});


@Component({
  selector: 'ads',
  templateUrl: 'ads.component.html' ,
  styleUrls: ['ads.component.css'],
})

export class AdsComponent {

  loadingImg: any = [];
constructor(){

  for(let i = 0; i < db.ads.length;i++){
    console.log(db.ads[i].url);
    this.refreshAvatar(i,db.ads[i].url);

  }

}




  refreshAvatar(i,link) {
    s3.getSignedUrl('getObject', {"Bucket":"kiosk-pictures",'Key': 'Ads/' + link}, (err, url) => {
      this.loadingImg[i] = url;
      if(err){
       // console.log(err)
      }
      else{
        console.log(url)
      }
    });
  }


}

