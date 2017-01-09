import { Component, OnInit } from '@angular/core';

export class Product {
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
  selector: 'app-shop',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class ShopCartComponent {
  availableProducts: Array<Product> = [];
  shoppingBasket: Array<Product> = [];
  availableForSpend: number = 300;

  constructor() {
    this.availableProducts.push(new Product("Blue Shoes", 3, 35));
    this.availableProducts.push(new Product("Good Jacket", 1, 90));
    this.availableProducts.push(new Product("Red Shirt", 5, 12));
    this.availableProducts.push(new Product("Blue Jeans", 4, 60));
  }

  orderedProduct($event) {
    $event.dragData.quantity--;
  }

  /**
   * The $event is a structure:
   * {
   *   dragData: any,
   *   mouseEvent: MouseEvent
   * }
   */
  addToBasket($event) {

    let product = this.shoppingBasket.find((value) => {
      return value.name === $event.dragData.name;
    });

    if(!!product){ 
      product.quantity++;} 
    else{
      this.shoppingBasket.push(new Product($event.dragData.name, 1,$event.dragData.cost));
    }
  }

  totalCost(): number {
    return this.shoppingBasket.map((prod: Product) => {
      return prod.cost * prod.quantity;
    }).reduce((total, value) => {
      return total + value;
    }, 0);
  }
  spendMore(val: number) {
    this.availableForSpend += val;
  }

}
