import { Component } from '@angular/core';
import { ImenuValues } from '../ImenuValues';
import {menuValues} from '../menuValues';
import { MenuDetailsComponent } from '../menu-details/menu-details.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
 newPropNames: Array<ImenuValues> = menuValues;
 
numberRando = Math.random() < 0.5;

}
