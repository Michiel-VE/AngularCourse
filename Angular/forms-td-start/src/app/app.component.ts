import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signUpForm: NgForm
  defaultQuestion = "pet";
  defaultGender = "unknown";
  answer: string;
  genders = ['Male', 'Female', 'Unknown'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
    gender: ''
  }
  submittedForm = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    //  1
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   userSecretData: {
    //     secret: 'pet',
    //     questionAnswer: ''
    //   },
    //   gender: 'unknown'
    // })

    //   2
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value.username);
  // }
  onSubmit() {
    console.log(this.signUpForm);
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.userSecretData.secret;
    this.user.secretAnswer = this.signUpForm.value.userSecretData.questionAnswer;

    this.user.gender = this.signUpForm.value.gender;

    this.submittedForm = true;

    this.signUpForm.reset();
  }
}
