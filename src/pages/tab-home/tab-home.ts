import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the TabHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {

  //กำหนดตัวแปรเก็บชื่อ login จาก local storage
  fullname:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(localStorage.getItem('userFullnameLogin')){
      this.fullname="Welcome."+localStorage.getItem('userFullnameLogin')
    }else{
      this.fullname="Welcome.Guest"
    }
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }
  login(){
    this.navCtrl.push(LoginPage);
  }
  logout(){
    localStorage.removeItem('userLoginStatus')
    localStorage.removeItem('userFullnameLogin')
    this.navCtrl.setRoot(TabsPage);
  }
}
