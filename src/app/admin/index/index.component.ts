import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  logoName: string = 'logo_light.png';
  chartType: string = 'line';
  constructor() { }
  myValue = 10;
  ngOnInit() {
  }
  side = 'start';

  links: any[] = [
    { name: 'Inbox' },
    { name: 'Outbox' },
    { name: 'Spam' },
    { name: 'Trash' }
  ];
  basicRowHeight = 80;
  public randomizeType(): void {
    this.chartType = this.chartType === 'line' ? 'bar' : 'line';
  }


}
