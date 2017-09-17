import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hi! I\'m interested in materializing brilliant ideas into tangible products.';
  alt = 'In other words, I\'m a front-end engineer.';

  displayText = this.title;

  onMouseOver() {

  }
}
