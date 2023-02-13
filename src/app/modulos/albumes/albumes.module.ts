import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumesRoutingModule } from './albumes-routing.module';
import { BandejaAlbumesComponent } from './bandeja-albumes/bandeja-albumes.component';


@NgModule({
  declarations: [
    BandejaAlbumesComponent
  ],
  imports: [
    CommonModule,
    AlbumesRoutingModule
  ]
})
export class AlbumesModule { }
