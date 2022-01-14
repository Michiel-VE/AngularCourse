import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  status = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.noTestProjectName], this.noTestProjectNameAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable', Validators.required)
    });
  }

  Submit() {
    const form = {
      projectName: this.projectForm.get('projectName').value,
      email: this.projectForm.get('email').value,
      status: this.projectForm.get('status').value,
    };
    console.log(form);

    this.projectForm.reset({
      'status': 'Stable'
    });
  }

  noTestProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value == 'TestProject') {
      return {'ProjectNameHasTest': true};
    }
    return null;
  }

  noTestProjectNameAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'ProjectNameHasTest': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

}
