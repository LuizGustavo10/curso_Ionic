import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-componente-native-text-to-speech',
  templateUrl: './componente-native-text-to-speech.page.html',
  styleUrls: ['./componente-native-text-to-speech.page.scss'],
})
export class ComponenteNativeTextToSpeechPage implements OnInit {

  textoASerFalado : string = 'Olá Mundo';

  constructor(private tts: TextToSpeech) { }

  
  

  ngOnInit() {
  }
  falar(){
    this.tts.speak({
      text  : this.textoASerFalado,
      locale: 'pt-BR',
      rate: 0.75

    
    })
    .then(() => console.log('Falou com Sucesso'))
    .catch((reason: any) => console.log(reason));
  }

}
