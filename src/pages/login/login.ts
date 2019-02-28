import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  //สร้างตัวแปรไว้รับค่าจาก form
  userData={
    username:"",
    password:""

  }
  //สร้างตัวแปรไว้รับค่าจาก API
  responsedData:any 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public api:WebapiServiceProvider,
    public alertCtrl:AlertController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  loginProcess(){
    this.api.postData(this.userData,"login.php").then((result)=>{
      //alert(JSON.stringify(result));
      this.responsedData=result
      if (this.responsedData.msg=="Login Success"){
        //alert("Login Success")
        this.alertCtrl.create({
        title:"สถานะการเข้าระบบ",
        subTitle:"เข้าระบบเรียบร้อยแล้ว",
        buttons:['OK']
        }).present();

        //สร้างตัวแปรแบบ Local Storage เพื่อเก็บข้อมูลการ login ไว้ในแอพ
        localStorage.setItem("userLoginStatus",this.userData.username);
        localStorage.setItem("userFullnameLogin",this.responsedData.fullname);

        //เมื่อ login ผ่านแล้ว ไปหน้าหลัก
        this.navCtrl.setRoot(TabsPage)

      }else{
        //alert("Login Failed")
        this.alertCtrl.create({
          title:"สถานะการเข้าระบบ",
          subTitle:"ไม่สามารถเข้าระบบได้แล้ว",
          buttons:['Dismiss']
          }).present();
      }
    });
  }
}
