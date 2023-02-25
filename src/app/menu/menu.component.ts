import { Component } from '@angular/core';
import { menuValues } from './menuValues';
import { ImenuValues } from './ImenuValues';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
 newPropNames: Array<ImenuValues> = menuValues;
 
numberRando = Math.random() < 0.5;

}
