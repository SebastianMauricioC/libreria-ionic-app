import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastronomiaPageRoutingModule } from './gastronomia-routing.module';

import { GastronomiaPage } from './gastronomia.page';

import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastronomiaPageRoutingModule,
    MatIconModule,
    GoogleMapsModule
  ],
  declarations: [GastronomiaPage]
})
export class GastronomiaPageModule { }
