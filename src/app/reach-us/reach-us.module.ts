import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReachUsPageRoutingModule } from './reach-us-routing.module';

import { ReachUsPage } from './reach-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReachUsPageRoutingModule
  ],
  declarations: [ReachUsPage]
})
export class ReachUsPageModule {}
