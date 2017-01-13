import { Component, OnInit } from '@angular/core';

export class Task {
  quantity: number;
  name: string;
  cost: number;
  constructor(name: string, quantity: number, cost: number) {
    this.quantity = quantity;
    this.name = name;
    this.cost = cost;
  }
}
@Component({
  selector: 'app-agile-board',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class AgileBoardComponent {
  listTodo: Array<string> = ['Study', 'Get work', 'Read the book', 'Do this template', 'Play with my dogs'];
  listDoing: Array<string> = [];
  listDone: Array<string> = [];

}
