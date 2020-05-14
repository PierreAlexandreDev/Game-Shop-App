import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'game-shop-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Pierre-Alexandre';
  appname = 'game-shop-app';
  counter = 1;
  isVisible = true;

  increment_counter(){
    this.counter = this.counter + 1;
  }

  decrement_counter(){
    this.counter = this.counter - 1;
  }

  showOrHide() {
  	this.isVisble = !this.isVisible;
  }
}
