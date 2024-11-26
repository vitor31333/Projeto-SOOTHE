import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { Storage } from '@ionic/storage-angular';

import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  user: any;

  //avatarImage: string = 'assets/avatar-placeholder.png';

  constructor(private userService: UserService, private storage: Storage) {
    this.storage.create();  
  }
  async ionViewWillEnter() {
    this.user = await this.storage.get('user');
  }

  async signOut() {
    await this.storage.remove('user');
    location.reload();
  }

  async ngOnInit() { const userData = await this.storage.get('user'); if (userData) { this.user = JSON.parse(userData); } else { this.user = null; } }

  //selectAvatar() {
   // const options: CameraOptions = {
     // quality: 100,
     // destinationType: this.camera.DestinationType.DATA_URL,
     // encodingType: this.camera.EncodingType.JPEG,
      //mediaType: this.camera.MediaType.PICTURE
   //};

    //this.camera.getPicture(options).then((imageData) => {
      //this.avatarImage = 'data:image/jpeg;base64,' + imageData;
    //}, (err) => {
      //console.log("Error: " + err);
    //});
  //}
}