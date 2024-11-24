import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
import { initializeApp } from "firebase/app";

import { environment } from 'src/environments/environment';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  oApp = initializeApp(environment.firebase);
  oAuth = getAuth(this.oApp);
    isToastOpen = false;
    nome: string ="";
    email: string = "";
    senha: string ="";
    confsenha: string="";

    setOpen(isOpen: boolean) {
      this.isToastOpen = isOpen;
    }

  constructor(private navCtrl: NavController) {}
  
  fazerCadastro() {
    
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);
    
    
  }
  register() {
    createUserWithEmailAndPassword(this.oAuth, this.email, this.senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuário registrado:', user);
        this.navCtrl.navigateRoot('/tabs/tab3');
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Erro ${errorCode}: ${errorMessage}`);
        this.setOpen(true);
      });
  }

}
