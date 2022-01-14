import {Component, OnDestroy, OnInit} from '@angular/core';

import {interval, Observable, Subscription} from 'rxjs'
import {error} from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private observableSub: Subscription

  constructor() {
  }

  ngOnInit() {
    // this.observableSub = interval(1000).subscribe(
    //   count => {
    //     console.log(count)
    //   }
    // )
    const customIntervalObservable = Observable.create(
      observer => {
        let count = 0;
        setInterval(
          () => {
            observer.next(count);
            if ( count === 2) {
              observer.complete();
            }
            if (count > 3){
              observer.error(new Error("Count > 3"))
            }
            count++;
          }, 1000
        )
      }
    )

    this.observableSub = customIntervalObservable.subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error)
        alert(error.message)
      }, () => {
        console.log('Done');
      }
    );
  }

  ngOnDestroy() {
    this.observableSub.unsubscribe();
  }

}
