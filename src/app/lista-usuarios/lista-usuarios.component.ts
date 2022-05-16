import { Component, OnInit } from '@angular/core';
import { Usuario, UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  usuarios:Usuario[]=[];
  constructor(private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.usuarios=this.usuariosService.getUsuarios();
  }

}
