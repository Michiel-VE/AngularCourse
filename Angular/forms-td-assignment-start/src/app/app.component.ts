import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') subForm: NgForm;
  defaultSub = 'Advanced';
  subs = ['Basic', 'Advanced', 'Pro'];
  submitted = false;

  formSub= {
    email: '',
    sub: '',
    password: ''
  };

  Submit() {
    this.formSub.email = this.subForm.value.email;
    this.formSub.sub = this.subForm.value.subs;
    this.formSub.password = this.subForm.value.password;

    this.submitted = true;
  }

}
