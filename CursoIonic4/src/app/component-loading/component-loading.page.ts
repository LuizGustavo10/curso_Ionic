import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-component-loading',
  templateUrl: './component-loading.page.html',
  styleUrls: ['./component-loading.page.scss'],
})
export class ComponentLoadingPage implements OnInit {

  constructor(private loadingCtrl : LoadingController) { }

  ngOnInit() {
  }

  async exibeLoadingDefault(){    
    let loading = await this.loadingCtrl.create({
      // content: 'Please wait...',
      duration : 2000
    });

    return await loading.present();
  }

}
