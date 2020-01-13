import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-component-alert',
  templateUrl: './component-alert.page.html',
  styleUrls: ['./component-alert.page.scss'],
})
export class ComponentAlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async abrirAlertSimples(){
    let alertSimples = await this.alertCtrl.create({
      header: 'Alert Simples',
      subHeader : 'sub header',
      message: 'Essa e mensagem do alert simples',
      buttons: ['OK']
    });
    await alertSimples.present();

  }

  async abrirAlertComMultiplosBotoes(){
    let alertMultiple = await this.alertCtrl.create({
      header: 'Alert Multiple',
      message: 'Essa é a mensagem do alert com múltiplos botões',
      buttons: ['Cancelar','abrir Modal', 'Excluir']
    });

    await alertMultiple.present();
  }
  async abrirAlertDeConfirmacao(){
    let alert = await this.alertCtrl.create({
      header: 'Confirmação',
      message: 'Deseja cancelar o pedido? <b>XPTO</b>',
      
      buttons: [
        {
          text : 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler : () => {
            console.log('Pedido Cancelado: XPTO')
          }
        },
        {
          text: 'Pagar',
          handler : () =>{
            console.log('Pago com sucesso!')
          }
        }
      ]
    });

    await alert.present(); 
  }
  async abrirPrompt(){
    let alert = await this.alertCtrl.create({
      header: 'Acesso Restrito',
      inputs : [
        {
          name : 'login',
          type : 'text',
          placeholder : 'Informe seu login'
        },
        {
          name : 'senha',
          type : 'password',
          placeholder : 'Informe sua senha'
        }
      ],
      buttons : [
        {
          text : 'Novo',
          cssClass : 'secondary',
          role : 'cancel',
          handler : (dadoss) =>  {
            console.log('Aqui vai abrir a tela de cadastro de novos usuários', dadoss)
          }
        },
        {
          text : 'Entrar',
          handler : (dado) =>  {
            console.log('Seja bem vindo fulado de tal',dado)
          }
        }
      ]
    
  });
  await alert.present(); 
}
async abrirRadio(){
  let alert = await this.alertCtrl.create({
    header: 'Radio',
    inputs: [
      {
        name: 'radio1',
        type: 'radio',
        label: 'radio1',
        value: 'radio1'
        // checked: true
      },
      {
        name: 'radio2',
        type: 'radio',
        label: 'radio2',
        value: 'radio2'
        // checked: true
      },
      {
        name: 'radio3',
        type: 'radio',
        label: 'radio3',
        value: 'radio3'
        // checked: true
      }
    ],

    buttons: [
      {
        text : 'Cancel',
        role: 'Cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('confirm cancel')
        }
      },
      {
        text:'ok',
         handler: () => {
          console.log('Confirm ok')
        }
      }
    ]
  });

  await alert.present();
}
async abrirCheckbox(){
  let alert = await this.alertCtrl.create({
    header: 'checkbox',
    inputs: [
      {
        name: 'checkbox1',
        type: 'checkbox',
        label: 'checkbox1',
        value: 'checkbox1'
        // checked: true
      },
      {
        name: 'checkbox2',
        type: 'checkbox',
        label: 'checkbox2',
        value: 'checkbox2'
        // checked: true
      },
      {
        name: 'checkbox3',
        type: 'checkbox',
        label: 'checkbox3',
        value: 'checkbox3'
        // checked: true
      }
    ],

    buttons: [
      {
        text : 'Cancel',
        role: 'Cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('confirm cancel')
        }
      },
      {
        //para colocar o conteúdo em uma variável
        text:'ok',
         handler: (dados) => {
          console.log('Confirm ok',dados)
        }
      }
    ]
  });

  await alert.present();
}
}
