import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { Storage } from '@ionic/storage-angular';

import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  user: any;

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

}