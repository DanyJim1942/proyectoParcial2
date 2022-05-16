import { Component, OnInit } from '@angular/core';
import { Usuario, UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuario:Usuario={
    nombre: "",
    correo: "",
    sexo: "",
    fecha: ""
  }
  constructor(private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.usuario=this.usuariosService.nuevoUsuario();
  }

  nuevoUsuario():void{
    this.usuariosService.agregarUsuario(this.usuario);
    this.usuario=this.usuariosService.nuevoUsuario();
  }

}
