import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { SearchComponent } from './search/search.component';
import { UnheroeComponent } from './unheroe/unheroe.component';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from './usuarios.service';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { VideoComponent } from './video/video.component';
import { DomseguroPipe } from './video/domseguro.pipe';
import { ForoComponent } from './foro/foro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    SearchComponent,
    UnheroeComponent,
    ListaUsuariosComponent,
    VideoComponent,
    DomseguroPipe,
    ForoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    UsuariosService
  ],
  exports:[HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
