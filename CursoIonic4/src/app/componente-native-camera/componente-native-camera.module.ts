import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteNativeCameraPage } from './componente-native-camera.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteNativeCameraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteNativeCameraPage]
})
export class ComponenteNativeCameraPageModule {}
