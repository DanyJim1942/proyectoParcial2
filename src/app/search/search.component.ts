import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../heroe';
import { HeroeService } from '../shared/heroe.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  nombreh:string="";
  indice:number=0;
  miheroe:Heroe={
    nombre: "",
    bio: "",
    img: "",
    aparicion: "",
    casa: ""
  } 
  constructor(private heroeService:HeroeService,private activatedRoute:ActivatedRoute,private _router:Router) { 
    this.activatedRoute.params.subscribe(params=> {
      this.nombreh=params['nombreh'];
      this.indice= this.heroeService.searchUnHeroe(this.nombreh);
      console.log(this.indice);

      if(this.indice!=-1){
        this.miheroe=this.heroeService.getUnHeroe(this.indice);
      }
    });
    
  }
  
  ngOnInit(): void {
    if(this.indice==-1){
      setTimeout(() => {
        this._router.navigate(['/heroes']);
      }, 3000);
    }
    
  }

}