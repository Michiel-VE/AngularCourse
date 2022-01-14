import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalStarted = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  Start() {
    this.interval = setInterval(() => {
      this.intervalStarted.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  Stop() {
    clearInterval(this.interval);
  }

}
