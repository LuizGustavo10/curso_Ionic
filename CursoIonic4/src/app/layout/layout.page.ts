import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  //adicionando navController para navegação
  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  //aqui vai meus métodos
  openLayoutHeaderFooter(){
    this.navCtrl.navigateForward('layout-header-footer');
  }
  openLayoutTabs(){
    this.navCtrl.navigateForward('layout-tabs');

  }
  openLayoutMenu(){
    this.navCtrl.navigateForward('layout-menu');

  }
  openLayoutSplit(){
    this.navCtrl.navigateForward('layout-split-pane');

  }

  
}
