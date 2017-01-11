import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-clock',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class ClockComponent {

  public timeNow;
  constructor() {
    setInterval(() => { this.myTimer() }, 1000);
  }

  myTimer() {
    this.timeNow = new Date().toLocaleTimeString();
  }


}
