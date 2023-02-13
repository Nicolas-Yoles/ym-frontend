import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandejaGenerosComponent } from './modulos/generos/bandeja-generos/bandeja-generos.component';
import { BandejaArtistasComponent } from './modulos/artistas/bandeja-artistas/bandeja-artistas.component';

@NgModule({
  declarations: [
    AppComponent,
    BandejaGenerosComponent,
    BandejaArtistasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
