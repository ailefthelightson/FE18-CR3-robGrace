import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { menuValues } from '../menu/menuValues';
import { ImenuValues } from '../menu/ImenuValues';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit{
  menuDet: ImenuValues = {} as ImenuValues;
  id: number = 0;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.menuDet = menuValues[this.id]
      console.log(this.menuDet)
    
    });
  }
}

