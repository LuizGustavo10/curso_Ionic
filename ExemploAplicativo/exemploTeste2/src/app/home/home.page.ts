import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AlertController, ToastController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks: any[] = [];
  constructor( private alertCtrl : AlertController, private toastCtrl : ToastController, private actionSheetCtrl : ActionSheetController) {
    let tasksJson = localStorage.getItem('taskDb');
      if (tasksJson != null) {
        // se tiver item, converte em objeto javascript
        this.tasks = JSON.parse(tasksJson);
      }
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

      this.updateLocalStorage(); 

     }

     async openActions(task: any){

       const actionSheet = await this.actionSheetCtrl.create({
        header: "O que deseja fazer?",
       
        buttons: [{
            text: task.done ? 'Desmarcar' : 'Marcar',
            icon: task.done ? 'radio-button-off' : 'checkmark-circle',
            handler: () =>{
              task.done = !task.done;

              this.updateLocalStorage();
            }
          }
          ,{
            text:'Cancelar',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }]
       });
       await actionSheet.present();
      }

      // Armazenamento Local, LocalStorage
      updateLocalStorage(){
        localStorage.setItem('tasksDb', JSON.stringify(this.tasks));
      }

      // vem toda lista só sem o item a tual, setando o array
      //limpa local storage  
      delete(task: any){
        this.tasks = this.tasks.filter(taskArray => task != taskArray);
        this.updateLocalStorage();
      }
}
