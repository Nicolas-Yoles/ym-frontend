import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerosRoutingModule } from './generos-routing.module';
import { BandejaGenerosComponent } from './bandeja-generos/bandeja-generos.component';


@NgModule({
  declarations: [
    BandejaGenerosComponent
  ],
  imports: [
    CommonModule,
    GenerosRoutingModule
  ]
})
export class GenerosModule { }
