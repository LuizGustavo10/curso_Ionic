import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-component-action-sheet',
  templateUrl: './component-action-sheet.page.html',
  styleUrls: ['./component-action-sheet.page.scss'],
})
export class ComponentActionSheetPage implements OnInit {

  constructor(private actionSheetCtrl : ActionSheetController) { }

  ngOnInit() {
  }

  async abrirActionSheet(){
    let actionSheet = await this.actionSheetCtrl.create({
      header : 'Albuns',
      buttons: [
        {
        text: 'excluir',
        role: 'desctructive',
        icon: 'trash',
        handler: ()=>{
          console.log('excluir');
          }
        },
        {
          text: 'Compartilhar',
          icon: 'share',
          handler: ()=>{
            console.log('Compartilhar');
           }
          },
          {
            text: 'Assistir',
            icon: 'arrow-dropright-circle',
            handler: ()=>{
              console.log('Assistir');
             }
            },
            {
              text: 'Cancelar',
              icon: 'closed',
              role: 'cancel',
              handler: ()=>{
                console.log('Assistir');
               }
              }

      ]

    });
    await actionSheet.present();
  }

}
