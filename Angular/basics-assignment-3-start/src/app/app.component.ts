import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pShowing = true;
  buttonLogList = [];


  toggleP() {
    if (this.pShowing) {
      this.buttonLogList.push(Date.now());
      return this.pShowing = false;
    } else {
      this.buttonLogList.push(Date.now());
      return this.pShowing = true;
    }
  }
}
