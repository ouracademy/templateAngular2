import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'view-drag and-drop',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class ReportChartsComponent {
  chartType: string = 'line';
  basicRowHeight = 80;
  public randomizeType(): void {
    this.chartType = this.chartType === 'line' ? 'bar' : 'line';
  }
}
