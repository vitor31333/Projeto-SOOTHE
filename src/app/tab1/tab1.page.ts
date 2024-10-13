import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  abrirlink() {
    window.open('https://blog.cliquebemestar.com.br/dicas-para-se-manter-calmo/');
  }
}

