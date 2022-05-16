import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuarios:Usuario[]=[];

  constructor() { 
    this.usuarios=JSON.parse( localStorage.getItem("data") || '[]' );
  }

  getUsuarios(){
    return this.usuarios;
  }

  agregarUsuario(usuario:Usuario){
    this.usuarios.push(usuario);
    localStorage.setItem('data',JSON.stringify(this.usuarios));
  }

  nuevoUsuario():Usuario{
    return{
      nombre: "",
      correo: "",
      sexo: "",
      fecha: ""
    }
  }

  
}

export interface Usuario{
  nombre: string;
  correo: string;
  sexo: string;
  fecha: string;
}

