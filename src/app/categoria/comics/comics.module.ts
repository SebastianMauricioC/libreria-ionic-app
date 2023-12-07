import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComicsPageRoutingModule } from './comics-routing.module';

import { ComicsPage } from './comics.page';
import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComicsPageRoutingModule,
    MatIconModule,
    GoogleMapsModule,
  ],
  declarations: [ComicsPage]
})
export class ComicsPageModule { }
