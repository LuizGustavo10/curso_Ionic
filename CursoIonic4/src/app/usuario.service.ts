import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http  : HttpClient) { }

  obterUsuarioPorId(id : number){
    let url ="http://localhost:5000/api/usuario/" + id;
    return this.http.get(url).toPromise().then().catch();
  }
  
  adicionar(usuario : any){
    let url ="http://localhost:5000/api/usuario/";
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post(url, usuario, {headers: headers}).toPromise();
  }

  atualizar(usuario : any){
    let url ="http://localhost:5000/api/usuario/";
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.put(url, usuario, {headers: headers}).toPromise();
  }

  excluir(id : number){
    let url ="http://localhost:5000/api/usuario/" + id;
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.delete(url).toPromise();
  }
}
