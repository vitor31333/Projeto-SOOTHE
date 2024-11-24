import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { isPlatform } from '@ionic/angular';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { UserService } from '../user.service';

import { Storage } from '@ionic/storage-angular';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  oApp = initializeApp(environment.firebase);
  oAuth = getAuth(this.oApp);
  isToastOpen = false;
  user: any = null;
  email!: string;
  senha!: string;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  constructor(private navCtrl: NavController, private userService: UserService, private storage: Storage) {
    this.storage.create();
    if (!isPlatform('capacitor')) {
      GoogleAuth.initialize();
    }
  }

  async signIn() {
    this.user = await GoogleAuth.signIn();
    console.log('user:', this.user);
    this.userService.setUser(this.user);
    this.navCtrl.navigateRoot('/tabs/tab1');
    this.storage.set('user', this.user);
  }

  async refresh() {
    const authCode = await GoogleAuth.refresh();
    console.log('refresh:', authCode);
  }

  async signOut() {
    await GoogleAuth.signOut();
    this.userService.clearUser();
    await this.storage.remove('user');
  }

  fazerLogin() {
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);
    this.navCtrl.navigateRoot('/tabs/tab1');
  }
  loginUser() {
    if (this.email === "" || this.senha === "") {
      console.log("Porfavor Digite seu Email e senha");
      return;
    }

    
    signInWithEmailAndPassword(this.oAuth, this.email, this.senha)
      .then((userCredential) => {
        console.log("Usuário já registrado:", userCredential.user);
        this.user = { email: userCredential.user.email };
        this.storage.set('user', this.user);
        this.navCtrl.navigateRoot('/tabs/tab1');
       
      })
      .catch((signInError) => {
        if (signInError.code === 'auth/user-not-found') {
          
          createUserWithEmailAndPassword(this.oAuth, this.email, this.senha)
            .then((userCredential) => {
              console.log("Novo usuário registrado:", userCredential.user);
            })
            .catch((createError) => {
              console.log("Erro ao criar usuário:", createError.code, createError.message);
            });
        } else {
          console.log("Erro ao fazer login:", signInError.code, signInError.message);
          this.setOpen(true);
        }
      });

  }
}