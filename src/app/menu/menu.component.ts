import { Component } from '@angular/core';
import { ImenuValues } from '../ImenuValues';
import {menuValues} from '../menuValues';
import { MenuDetailsComponent } from '../menu-details/menu-details.component';
import { StoreService } from '../store.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
 newPropNames: Array<ImenuValues> = menuValues;
 
constructor(private cs: StoreService){

}
addToCart(whatever:ImenuValues){
alert("added");
this.cs.addToCart(whatever);
console.log(this.cs.addToCart(whatever))
}
}
