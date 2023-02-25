import { Injectable } from '@angular/core';
import { ImenuValues } from './ImenuValues';
import { menuValues } from './menuValues';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
 cart : Array <ImenuValues> = [];
  constructor() { }

  addToCart(whatever: ImenuValues){
    this.cart.push(whatever)
  }

  getCart(){
    return this.cart;
  }
  clearCart(){
    this.cart=[];
    return this.cart;
  }
}
