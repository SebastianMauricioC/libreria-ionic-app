import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CienciasPageRoutingModule } from './ciencias-routing.module';

import { CienciasPage } from './ciencias.page';

import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CienciasPageRoutingModule,
    MatIconModule,
    GoogleMapsModule,
  ],
  declarations: [CienciasPage]
})
export class CienciasPageModule {}
