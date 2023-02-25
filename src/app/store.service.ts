import { Injectable } from '@angular/core';
import { ImenuValues } from './menu/ImenuValues';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
cart = Array <ImenuValues> = [];
  constructor() { }
}
