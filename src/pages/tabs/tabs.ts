import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabHomePage } from '../tab-home/tab-home';
import { TabCoursePage } from '../tab-course/tab-course';
import { TabServicePage } from '../tab-service/tab-service';
import { TabArticlePage } from '../tab-article/tab-article';
import { TabContactPage } from '../tab-contact/tab-contact';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
tab1root:any = TabHomePage
tab2root:any = TabCoursePage
tab3root:any = TabServicePage
tab4root:any = TabArticlePage
tab5root:any = TabContactPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
