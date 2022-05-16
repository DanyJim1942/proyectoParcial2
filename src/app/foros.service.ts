import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForosService {
  private usuariosf:Usuario[]=[];
  constructor() { 
    this.usuariosf=JSON.parse( localStorage.getItem("dataforo") || '[]' );
  }
  getUsuarios(){
    return this.usuariosf;
  }
  agregarUsuarioF(usuario:Usuario){
    this.usuariosf.push(usuario);
    localStorage.setItem('dataforo',JSON.stringify(this.usuariosf));
  }
  nuevoUsuarioF():Usuario{
    return{
      nombref: "",
      comentariof: ""
    }
  }
}
export interface Usuario{
  nombref: string;
  comentariof: string;
}

