import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { isPlatform } from '@ionic/angular';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  user: any = null;
  email: string | undefined;
  senha: string | undefined;

  constructor(private navCtrl: NavController, private userService: UserService) {
    if (!isPlatform('capacitor')) {
      GoogleAuth.initialize();
    }
  }

  async signIn() {
    this.user = await GoogleAuth.signIn();
    console.log('user:', this.user);
    this.userService.setUser(this.user);
    this.navCtrl.navigateRoot('/tabs/tab1');
  }

  async refresh() {
    const authCode = await GoogleAuth.refresh();
    console.log('refresh:', authCode);
  }

  async signOut() {
    await GoogleAuth.signOut();
    this.userService.clearUser();
  }

  fazerLogin() {
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);
    this.navCtrl.navigateRoot('/tabs/tab1');
  }
}