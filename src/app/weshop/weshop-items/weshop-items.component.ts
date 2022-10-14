import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weshop-items',
  templateUrl: './weshop-items.component.html',
  styleUrls: ['./weshop-items.component.css']
})
export class WeshopItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  shopcard(n: number): Array<number> {
    return Array(n);
  }
}
