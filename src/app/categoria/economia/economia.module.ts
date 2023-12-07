import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EconomiaPageRoutingModule } from './economia-routing.module';

import { EconomiaPage } from './economia.page';

import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EconomiaPageRoutingModule,
    MatIconModule,
    GoogleMapsModule,
  ],
  declarations: [EconomiaPage]
})
export class EconomiaPageModule {}
