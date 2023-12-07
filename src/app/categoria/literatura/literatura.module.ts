import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiteraturaPageRoutingModule } from './literatura-routing.module';

import { LiteraturaPage } from './literatura.page';

import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiteraturaPageRoutingModule,
    MatIconModule,
    GoogleMapsModule,
  ],
  declarations: [LiteraturaPage]
})
export class LiteraturaPageModule {}
