import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  
    nome: string ="";
    email: string = "";
    senha: string ="";
    confsenha: string="";

  constructor(private navCtrl: NavController) {}
  
  fazerCadastro() {
    
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);
    
    this.navCtrl.navigateRoot('/tabs/tab1');
  }


}
