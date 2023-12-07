import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CienciasPage } from './ciencias.page';

const routes: Routes = [
  {
    path: '',
    component: CienciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CienciasPageRoutingModule {}
