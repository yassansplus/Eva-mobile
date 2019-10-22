import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnteringPage } from './entering.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
const routes: Routes = [
  {
    path: '',
    component: EnteringPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  declarations: [EnteringPage]
})
export class EnteringPageModule {}
