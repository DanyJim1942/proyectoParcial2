import { Component, OnInit } from '@angular/core';
import { Usuario, ForosService } from '../foros.service';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {
  usuariof:Usuario={
    nombref: "",
    comentariof: ""
  }
  usuarios:Usuario[]=[];
  constructor(private forosService:ForosService) { }

  ngOnInit(): void {
    this.usuariof=this.forosService.nuevoUsuarioF(); 
    this.usuarios=this.forosService.getUsuarios();
  }

  nuevoUsuario():void{
    this.forosService.agregarUsuarioF(this.usuariof);
    this.usuariof=this.forosService.nuevoUsuarioF();
  } 
}
