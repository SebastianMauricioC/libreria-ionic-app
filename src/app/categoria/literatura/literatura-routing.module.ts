import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiteraturaPage } from './literatura.page';

const routes: Routes = [
  {
    path: '',
    component: LiteraturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiteraturaPageRoutingModule {}
