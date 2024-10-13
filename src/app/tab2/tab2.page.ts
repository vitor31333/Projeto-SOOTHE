import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
  export class Tab2Page {
    isModalOpen = false;
    isModalOpen1 = false;
    isModalOpen2 = false;
    isModalOpen3 = false;
  
    setOpen(isOpen: boolean) {
      this.isModalOpen = isOpen;
    
}
    setOpen1(isOpen1: boolean) {
      this.isModalOpen1 = isOpen1;
    }
    setOpen2(isOpen2: boolean) {
      this.isModalOpen2 = isOpen2;
    }
    setOpen3(isOpen3: boolean) {
      this.isModalOpen3 = isOpen3;
    }
constructor() { }
  }