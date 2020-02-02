import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { CepService } from '../usuario.service.spec';

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.page.html',
  styleUrls: ['./api-externa.page.scss'],
})
export class ApiExternaPage implements OnInit {

  result : any;
  constructor(private usuarioService : UsuarioService, private cepService : CepService) { }

  ngOnInit() {
  }

  get(){
    this.usuarioService.obterUsuarioPorId(50)
    .then((response)=>{
      this.result = JSON.stringify(response);
      console.log('funcionou');
    }) //no sucesso
    .catch(()=>{
      console.log('erro');

    }); //no erro
  }
  post(){
    let usuario = {id:50, nome: 'Zeca'};

    this.usuarioService.adicionar(usuario).then((response : any)=>{
     
      this.result = JSON.stringify(response);
    })
    .catch((response)=>{
      
      this.result = JSON.stringify(response);
    });
  }
  put(){
    let usuario = {id:4, nome: 'Tereza'};

    this.usuarioService.atualizar(usuario).then((response : any)=>{
      console.log('Funcionou', response);
      this.result = JSON.stringify(response);
    })
    .catch((response)=>{
      console.log('Deu erro', response);
      this.result = JSON.stringify(response);
    });
  }
  delete(){
    this.usuarioService.excluir(4)
    .then((response)=>{
      this.result = JSON.stringify(response);
      console.log('funcionou');
    }) //no sucesso
    .catch(()=>{
      console.log('erro');

    }); //no erro
  }

  cep(){
    this.cepService.obterEndereco(87970000)
    .then((response)=>{
      this.result = JSON.stringify(response);
      console.log('funcionou');
    }) //no sucesso
    .catch(()=>{
      console.log('erro');

    }); //no erro
  }

}
