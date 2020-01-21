import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks: any[] = [];
  constructor(private alertCtrl : AlertController, private toastCtrl : ToastController) {
  
    }
    async showAdd(){ 

      const alert = await this.alertCtrl.create({
        header: 'O que deseja fazer?',
        // meu input
        inputs: [
          {
            name:'taskToDo',
            type:'text',
            placeholder: 'Comprar pão'
          }
        ],
        // Meus botoes
        buttons: [
          //cancelar
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
             console.log('Confirm Cancel')
            }
          },
          //adicionar
          {
            text: 'Adicionar',
            handler: (form) => {
              this.add(form.taskToDo);
              console.log(form);

            }
          }

        ]
        // fim dos botoes

      });
      await alert.present(); 
     }

    //  Se o campo de texto não estiver preenchido
     async add(taskToDo : string){
      if (taskToDo.trim().length < 1) {
        const toast = await this.toastCtrl.create({
          message: 'Informe o que deseja fazer!',
          duration: 2000,
          position: 'top',
          color: 'dark'
        });
        toast.present();
        return;
      }

      let task = {name: taskToDo, done : false};
      this.tasks.push(task);

     }
  

}
