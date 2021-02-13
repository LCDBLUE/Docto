import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReachUsPage } from './reach-us.page';

const routes: Routes = [
  {
    path: '',
    component: ReachUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReachUsPageRoutingModule {}
