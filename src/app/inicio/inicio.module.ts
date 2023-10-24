import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
export class DatepickerCustomIconExample {}
