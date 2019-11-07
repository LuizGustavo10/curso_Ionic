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
  //aqui vai meus métodos, dos botões
  //cada botão redireciona para uma página, 
  openLayoutHeaderFooter(){
    this.navCtrl.navigateForward('layout-header-footer');
    //faça o ionic generate e cria uma pagina e coloque no parenteses acima
  }
//função para navegar para paginas
  abrirPagina(nomeDaPagina : string){
    this.navCtrl.navigateForward(nomeDaPagina);

  }


  
}
