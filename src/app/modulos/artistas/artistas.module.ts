import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistasRoutingModule } from './artistas-routing.module';
import { BandejaArtistasComponent } from './bandeja-artistas/bandeja-artistas.component';


@NgModule({
  declarations: [
    BandejaArtistasComponent
  ],
  imports: [
    CommonModule,
    ArtistasRoutingModule
  ]
})
export class ArtistasModule { }
