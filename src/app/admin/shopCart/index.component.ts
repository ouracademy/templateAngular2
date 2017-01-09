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
    let newProduct: Product = $event.dragData;
    for (let indx in this.shoppingBasket) {
      let product: Product = this.shoppingBasket[indx];
      if (product.name === newProduct.name) {
        product.quantity++;
        return;
      }
    }
    this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
    console.log(this.shoppingBasket);
  }

  totalCost(): number {
    let cost: number = 0;
    for (let indx in this.shoppingBasket) {
      let product: Product = this.shoppingBasket[indx];
      cost += (product.cost * product.quantity);
    }
    return cost;
  }
 



}
