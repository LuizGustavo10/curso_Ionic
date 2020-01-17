import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-slide',
  templateUrl: './component-slide.page.html',
  styleUrls: ['./component-slide.page.scss'],
})
export class ComponentSlidePage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  comecar(){
    this.navCtrl.navigateForward('HomePage');
  }

}
