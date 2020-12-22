import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextfieldsPage } from './textfields.page';

const routes: Routes = [
  {
    path: '',
    component: TextfieldsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextfieldsPageRoutingModule {}
