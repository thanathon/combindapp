import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WebapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebapiServiceProvider {
//กำหนดตัวแปรไว้กเก็บ URL ของ API
baseURL:any;ders
  constructor(public http: Http) {
    this.baseURL = 'http://localhost/combindappapi/';
  }
postData(objdata,segment){
  return new Promise((resolve,reject)=>{
    let headers = new Headers();
    headers.append('Content-Type','application/jason');

    this.http.post(this.baseURL+segment,JSON.stringify(objdata),{headers:headers})
    .subscribe(res=>{
      resolve(res.json());
    },(err)=>{
      reject(err);
    });
  });
}
}
