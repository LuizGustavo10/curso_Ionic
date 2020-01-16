import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ComponentModalInternoPage } from '../component-modal-interno/component-modal-interno.page';

@Component({
  selector: 'app-component-modal',
  templateUrl: './component-modal.page.html',
  styleUrls: ['./component-modal.page.scss'],
})
export class ComponentModalPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  async showModal(){
    let modal = await this.modalCtrl.create({

      component : ComponentModalInternoPage,
      componentProps : {idade : 37}
    });
    return await modal.present();
  }

}
