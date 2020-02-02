import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http  : HttpClient) { }

  obterEndereco(cep : number){
    let url ='https://viacep.com.br/ws/'+ cep +'/json/'
    return this.http.get(url).toPromise();
  }
  
}
