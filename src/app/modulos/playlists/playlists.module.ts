import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistsRoutingModule } from './playlists-routing.module';
import { BandejaPlaylistsComponent } from './bandeja-playlists/bandeja-playlists.component';


@NgModule({
  declarations: [
    BandejaPlaylistsComponent
  ],
  imports: [
    CommonModule,
    PlaylistsRoutingModule
  ]
})
export class PlaylistsModule { }
