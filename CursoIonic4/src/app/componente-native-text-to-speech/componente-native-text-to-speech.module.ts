import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponenteNativeTextToSpeechPage } from './componente-native-text-to-speech.page';

const routes: Routes = [
  {
    path: '',
    component: ComponenteNativeTextToSpeechPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComponenteNativeTextToSpeechPage]
})
export class ComponenteNativeTextToSpeechPageModule {}
