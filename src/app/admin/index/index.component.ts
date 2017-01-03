import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  logoName: string = 'logo_ouracademy_dark.png';
  chartType: string = 'line';
  constructor() { }
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
