import { Component, OnInit } from '@angular/core';
import { ImenuValues } from '../ImenuValues';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart: Array<ImenuValues> = []
  constructor(private cs:StoreService){
    
  }

  ngOnInit(): void {
    this.cart = this.cs.getCart();
  }
}
