import { browser } from 'protractor';
import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  //criando as páginas
  paginas : any[] = [
    {titulo: "Home", icone: 'home', url:'/home'},
    {titulo: "Instalação", icone: 'arrow-dropright-circle', url: '/instalacao'},
    {titulo: "Layout", icone: 'arrow-dropright-circle', url: '/layout'},
    {titulo: "Componentes", icone: 'arrow-dropright-circle', url: '/componentes'},
    //api
    {titulo: "Api Externa", icone: 'arrow-dropright-circle', url: '/apiExterna'},
    {titulo: "Animações", icone: 'arrow-dropright-circle', url: '/animacoes'},
    {titulo: "Componentes Nativos", icone: 'arrow-dropright-circle', url: '/componentesNativos'}
 
    
  ];

 

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
