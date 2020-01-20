import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentSeachbarPage } from './component-seachbar.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentSeachbarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponentSeachbarPage]
})
export class ComponentSeachbarPageModule {}
