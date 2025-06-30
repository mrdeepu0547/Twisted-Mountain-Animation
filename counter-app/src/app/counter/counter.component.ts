import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  constructor(
    public spinner: NgxSpinnerService){

  }
  ngOnInit(): void {
  }
  counter = 0;
  history: string[] = [];
  animated = false;
  //Increses the value of counter by one unit
  increment() {
    this.spinner.show('spinner');
    this.counter++;
    this.history.unshift(`[+1] Counter is now ${this.counter}`);
    this.animate();
  }
  //Decreases the value by one unit
  decrement() {
    this.spinner.show('spinner');
    this.counter--;
    this.history.unshift(`[-1] Counter is now ${this.counter}`);
    this.animate();
  }
  //Resets the counter value by making the counter value to 0
  reset() {
    this.spinner.show('spinner');
    this.counter = 0;
    this.history.unshift(`[Reset] Counter is now 0`);
    this.animate();
  }
  //Takes confirmation from user before clearing the history
  clearHistory() {
    this.spinner.show('spinner');
    const confirmed = confirm('Are you sure you want to clear the history?');
    if (confirmed) {
      this.history = [];
    }
    this.spinner.hide('spinner');
  }
  //Provides absic animation to counter
  animate() {
    this.animated = true;
    setTimeout(() => {
      this.animated = false;
      this.spinner.hide('spinner');
    }, 300);
  }
}
