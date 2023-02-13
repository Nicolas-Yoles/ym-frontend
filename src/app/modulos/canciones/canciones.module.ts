import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancionesRoutingModule } from './canciones-routing.module';
import { BandejaCancionesComponent } from './bandeja-canciones/bandeja-canciones.component';


@NgModule({
  declarations: [
    BandejaCancionesComponent
  ],
  imports: [
    CommonModule,
    CancionesRoutingModule
  ]
})
export class CancionesModule { }
