import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-component-toast',
  templateUrl: './component-toast.page.html',
  styleUrls: ['./component-toast.page.scss'],
})
export class ComponentToastPage implements OnInit {

  constructor(private toastCtrl : ToastController) { }

  ngOnInit() {
  }

  async showToast(){
    let toast = await this.toastCtrl.create({
      message: 'enviado via toast',
      duration: 2000
    });
    toast.present(); 
  }

}
