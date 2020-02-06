import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Component, OnInit } from '@angular/core';

@Component({
  
  selector: 'app-componente-native-camera',
  templateUrl: './componente-native-camera.page.html',
  styleUrls: ['./componente-native-camera.page.scss'],
})
export class ComponenteNativeCameraPage implements OnInit {

  foto : any;
  constructor(private camera: Camera) { }

  ngOnInit() {
  }

  tirarFoto(){
  


// const options: CameraOptions = {
//   quality: 100,
//   destinationType: this.camera.DestinationType.DATA_URL,
//   encodingType: this.camera.EncodingType.JPEG,
//   mediaType: this.camera.MediaType.PICTURE
// }

// this.camera.getPicture(options).then((imageData) => {
//  // imageData is either a base64 encoded string or a file URI
//  // If it's base64 (DATA_URL):
//  let base64Image = 'data:image/jpeg;base64,' + imageData;
// }, (err) => {
//  // Handle error
//  alert("Não foi possível tirar a foto");
//  alert(err);
// });
  }
}
