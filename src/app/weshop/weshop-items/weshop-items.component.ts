import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weshop-items',
  templateUrl: './weshop-items.component.html',
  styleUrls: ['./weshop-items.component.css']
})
export class WeshopItemsComponent implements OnInit {
  images: any;

  constructor() { }

  ngOnInit(): void {
    this.images = [
      {
        img2: "../../../../assets/images/Weshop_item1.png",
      },
      {
        img2: "../../../../assets/images/Weshop_item2.png"
      },
      {
        img2: "../../../../assets/images/Weshop_item3.png"
      },
      {
        img2: "../../../../assets/images/Weshop_item1.png"
      }
    ]
  }
  shopcard(n: number): Array<number> {
    return Array(n);
  }


}
