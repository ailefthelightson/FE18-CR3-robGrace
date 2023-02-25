import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ImenuValues } from '../ImenuValues'; 
import { menuValues } from '../menuValues';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit{
  menuDet: ImenuValues = {} as ImenuValues;
  i: number = 0;

  constructor(
    private route: ActivatedRoute, private cs: StoreService
  ) {}

  addToCart(){
    alert("product has been added to cart");
    this.cs.addToCart(this.menuDet);
    console.log(this.cs.cart)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.i = +params["i"];
      this.menuDet = menuValues[this.i]
      console.log(this.menuDet)
    
    });
  }
}

